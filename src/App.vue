<template>
  <div id="app" class="w-screen h-screen relative">
    <!-- Three.js 场景容器 -->
    <ThreeScene 
      ref="threeScene" 
      :sun-elevation="sunElevation"
      :sun-azimuth="sunAzimuth"
      :is-manual-sun-control="isManualSunControl"
      :hdri-intensity="hdriIntensity"
      @preset-changed="handlePresetChanged" 
    />
    
    <!-- UI 层覆盖 -->
    <UILayer 
      :current-preset-name="currentPresetName"
      :text-count="5"
      :sun-elevation="sunElevation"
      :sun-azimuth="sunAzimuth"
      :is-manual-sun-control="isManualSunControl"
      :hdri-intensity="hdriIntensity"
      @next-preset="handleNextPreset"
      @prev-preset="handlePrevPreset"
      @sun-elevation-change="handleSunElevationChange"
      @sun-azimuth-change="handleSunAzimuthChange"
      @sun-control-mode-change="handleSunControlModeChange"
      @reset-sun-to-preset="resetSunToPreset"
      @hdri-intensity-change="handleHdriIntensityChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import ThreeScene from './components/ThreeScene.vue'
import UILayer from './components/UILayer.vue'

// 响应式数据
const threeScene = ref(null)
const currentPresetName = ref('')
let sunPresets = [] // Store sun presets data

// 状态：初始为null，onMounted后用JSON第一个预设填充
const sunElevation = ref(null)
const sunAzimuth = ref(null)
const isManualSunControl = ref(false)
const hdriIntensity = ref(null)

// Handle HDRI intensity change
const handleHdriIntensityChange = (value) => {
  hdriIntensity.value = value
}

// Handle preset change with index (called when camera transition completes)
const handlePresetChanged = (newIndex) => {
  updatePresetName()
  if (!isManualSunControl.value) {
    updateSunFromIndex(newIndex)
  }
}

// Update sun parameters from preset index
const updateSunFromIndex = (index) => {
  const sunPreset = sunPresets[index]
  if (sunPreset) {
    sunElevation.value = sunPreset.sunElevation
    sunAzimuth.value = sunPreset.sunAzimuth
    hdriIntensity.value = sunPreset.hdriIntensity
  }
}

// 处理相机预设切换
const handleNextPreset = () => {
  if (threeScene.value) {
    threeScene.value.nextPreset()
  }
}

const handlePrevPreset = () => {
  if (threeScene.value) {
    threeScene.value.prevPreset()
  }
}

// 更新当前预设名称
const updatePresetName = () => {
  if (threeScene.value) {
    currentPresetName.value = threeScene.value.getCurrentPresetName()
  }
}

// 手动调整太阳参数
const handleSunElevationChange = (value) => {
  sunElevation.value = value
  if (!isManualSunControl.value) {
    isManualSunControl.value = true // 自动切换到手动模式
  }
}

const handleSunAzimuthChange = (value) => {
  sunAzimuth.value = value
  if (!isManualSunControl.value) {
    isManualSunControl.value = true // 自动切换到手动模式
  }
}

// 切换自动/手动模式
const handleSunControlModeChange = (manual) => {
  isManualSunControl.value = manual
  if (!manual && threeScene.value) {
    // 切换到自动模式时，立即同步当前预设的太阳参数
    const currentIndex = threeScene.value.getCurrentIndex()
    updateSunFromIndex(currentIndex)
  }
}

// 重置为当前预设的太阳参数
const resetSunToPreset = () => {
  if (threeScene.value) {
    const currentIndex = threeScene.value.getCurrentIndex()
    updateSunFromIndex(currentIndex)
  }
}

// 组件挂载后初始化
onMounted(async () => {
  // 加载太阳预设数据
  try {
    const sunRes = await fetch('assets/sun_presets.json')
    const sunData = await sunRes.json()
    sunPresets = sunData.presets
    
    // 使用第一个预设初始化状态
    if (sunPresets.length > 0) {
      const firstSun = sunPresets[0]
      sunElevation.value = firstSun.sunElevation
      sunAzimuth.value = firstSun.sunAzimuth
      hdriIntensity.value = firstSun.hdriIntensity
    }
  } catch (error) {
    console.error('Failed to load sun presets:', error)
  }
  
  // 延迟更新预设名称
  setTimeout(() => {
    updatePresetName()
  }, 1000)
})
</script>

<style>
/* 引入主样式文件 */
@import './styles/main.css';
</style> 