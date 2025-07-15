<template>
  <div ref="container" class="w-full h-full"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { SkyEnvironment } from '../skyEnvironment.js'
import { loadGLBModel } from '../modelLoader.js'
import { loadCameraPresetsFromJSON, CameraController } from '../cameraUtils.js'
import { HDRILoader } from '../hdriLoader.js'
import { createThreeApp } from '../threeSetup.js'
import { Interpolator } from '../Interpolator.js'
import { InputManager } from '../inputManager.js'
import { ShaderManager } from '../shaderManager.js'

// Define props
const props = defineProps({
  sunElevation: Number,
  sunAzimuth: Number,
  isManualSunControl: Boolean,
  hdriIntensity: Number
})

// Define emits
const emit = defineEmits(['presetChanged'])

// Template refs
const container = ref(null)

// Three.js instance
let scene, camera, renderer, skyEnv, cameraController, model, hdriLoader
let inputManager = null
let shaderManager = null
let sunPresets = [] // Store sun presets data

// Use interpolator to manage sun elevation, azimuth, and hdri intensity
let sunElevationLerp = new Interpolator(props.sunElevation, 1.2)
let sunAzimuthLerp = new Interpolator(props.sunAzimuth, 1.2)
let hdriIntensityLerp = new Interpolator(props.hdriIntensity, 1.2)

// watch sun parameters, start interpolation
watch(() => props.sunElevation, (newElevation) => {
  if (!props.isManualSunControl) {
    sunElevationLerp.start(newElevation)
  } else {
    sunElevationLerp.currentValue = newElevation
  }
}, { immediate: true })

watch(() => props.sunAzimuth, (newAzimuth) => {
  if (!props.isManualSunControl) {
    sunAzimuthLerp.start(newAzimuth)
  } else {
    sunAzimuthLerp.currentValue = newAzimuth
  }
}, { immediate: true })

// watch hdriIntensity, start interpolation
watch(() => props.hdriIntensity, (newIntensity) => {
  hdriIntensityLerp.start(newIntensity)
}, { immediate: true })

const isDev = import.meta.env.DEV
const base = import.meta.env.BASE_URL

// Animation loop ID
let animationId = null

// EaseInOutCubic interpolation function
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Methods exposed to parent component
const nextPreset = () => {
  if (cameraController) {
    cameraController.nextPreset()
  }
}

const prevPreset = () => {
  if (cameraController) {
    cameraController.prevPreset()
  }
}

const getCurrentPresetName = () => {
  return cameraController ? cameraController.getCurrentPresetName() : ''
}

const getCurrentPreset = () => {
  return cameraController ? cameraController.getCurrentPreset() : null
}

// Event callback implementation
const onKeyDown = (event) => {
  if (!cameraController) return
  switch (event.code) {
    case 'ArrowRight':
    case 'KeyD':
      nextPreset()
      break
    case 'ArrowLeft':
    case 'KeyA':
      prevPreset()
      break
  }
}
let lastWheelTime = 0;
const wheelThrottle = 400;
const onWheel = (event) => {
  const now = Date.now();
  if (now - lastWheelTime < wheelThrottle) return;
  lastWheelTime = now;
  if (!cameraController) return;
  if (event.deltaY > 0) {
    nextPreset();
  } else if (event.deltaY < 0) {
    prevPreset();
  }
}
const onResize = () => {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate)
  const now = performance.now() * 0.001
  // Update all shader uniforms
  if (shaderManager) {
    shaderManager.updateUniforms({ now, renderer })
  }
  // Advance sun interpolation
  const currentSunElevation = sunElevationLerp.tick()
  const currentSunAzimuth = sunAzimuthLerp.tick()
  const currentHdriIntensity = hdriIntensityLerp.tick()

  if (skyEnv) {
    skyEnv.setSunPosition(currentSunElevation, currentSunAzimuth)
  }
  if (hdriLoader && typeof hdriLoader.setIntensity === 'function') {
    hdriLoader.setIntensity(currentHdriIntensity)
  }
  if (cameraController) {
    cameraController.update()
  }
  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// Initialize Three.js scene
const initThreeJS = async () => {
  if (!container.value) return

  // Create basic three elements using factory function
  const { scene: newScene, camera: newCamera, renderer: newRenderer } = createThreeApp()
  scene = newScene
  camera = newCamera
  renderer = newRenderer
  container.value.appendChild(renderer.domElement)

  // Initialize HDRI loader - directly use props.hdriIntensity
  hdriLoader = new HDRILoader(renderer, props.hdriIntensity)

  // Load HDRI environment map
  try {
    const envMap = await hdriLoader.loadHDRI(base + 'assets/environment.exr')
    hdriLoader.setEnvironmentMap(scene, envMap)
    console.log('HDRI environment loaded successfully')
    console.log('Current HDRI intensity:', hdriLoader.getIntensity())
    console.log('Use hdriLoader.setIntensity(value) to adjust HDRI strength (0-2 range)')
  } catch (error) {
    console.error('Failed to load HDRI:', error)
  }

  // Ambient light
  // scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  
  // Sunlight
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
  dirLight.position.set(0, 100, 100)
  scene.add(dirLight)

  // Sky environment
  skyEnv = new SkyEnvironment(scene)

  // Load model
  try {
    const gltf = await loadGLBModel(base + 'assets/Tower.glb')
    model = gltf.scene
    model.rotation.x = -Math.PI / 2 // Convert Blender Z-up to Three.js Y-up
    scene.add(model)
    
    // After model loading, ensure HDRI intensity is correctly applied to materials
    if (hdriLoader) {
      hdriLoader.updateIntensity()
    }
    
    console.log('Model loaded successfully')
  } catch (error) {
    console.error('Failed to load model:', error)
  }

  // Load camera presets
  try {
    const [cameraPresets, sunPresetsData] = await Promise.all([
      loadCameraPresetsFromJSON(base + 'assets/camera_presets.json'),
      fetch(base + 'assets/sun_presets.json').then(res => res.json())
    ])
    
    sunPresets = sunPresetsData.presets // Store sun presets globally
    
    if (cameraPresets.length > 0) {
      const firstPreset = cameraPresets[0]
      camera = new THREE.PerspectiveCamera(
        firstPreset.fov || 60,
        window.innerWidth / window.innerHeight,
        firstPreset.near || 0.1,
        firstPreset.far || 1000
      )
      camera.position.copy(firstPreset.position)
      camera.fov = firstPreset.fov
      camera.near = firstPreset.near
      camera.far = firstPreset.far
      camera.updateProjectionMatrix()
      camera.lookAt(firstPreset.lookAtTarget)
      
      // Create camera controller with transition complete callback
      cameraController = new CameraController(camera, cameraPresets, (newIndex) => {
        // Emit preset change when transition completes
        emit('presetChanged', newIndex)
      })
      
      // Initialize sun position (will be handled by watch, so only set initial value here)
      skyEnv.setSunPosition(props.sunElevation, props.sunAzimuth);
      console.log('Camera presets loaded successfully')
    }
  } catch (error) {
    console.error('Failed to load camera presets:', error)
    camera.position.set(0, 100, 400)
    camera.lookAt(0, 0, 0)
  }

  // Initialize ShaderManager and automatically register all shader meshes
  shaderManager = new ShaderManager(scene)
  shaderManager.autoRegisterAll()

  // Start animation loop
  animate()
}

// Clean up resources
const cleanup = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  if (renderer) {
    renderer.dispose()
  }
  
  // Remove event listeners
  // window.removeEventListener('wheel', handleWheel)
  // window.removeEventListener('resize', handleResize)
}

// Initialize when component is mounted
onMounted(async () => {
  await initThreeJS()
  // Create and register input event manager
  inputManager = new InputManager({
    onWheel,
    onKeyDown,
    onResize
  })
  inputManager.init()
})

// Clean up when component is unmounted
onUnmounted(() => {
  if (inputManager) inputManager.dispose()
  cleanup()
})

const getCurrentIndex = () => {
  return cameraController ? cameraController.getCurrentIndex() : 0
}

const getSunPresetByIndex = (index) => {
  return sunPresets[index] || null
}

// Expose methods to parent component
defineExpose({
  nextPreset,
  prevPreset,
  getCurrentPresetName,
  getCurrentPreset,
  getCurrentIndex,
  getSunPresetByIndex,
  hdriLoader // Expose hdriLoader instance
})
</script>

<style scoped>
/* Three.js canvas styles */
:deep(canvas) {
  display: block;
  outline: none;
}
</style> 