import * as THREE from 'three'

export const THREE_DEFAULTS = {
  hdriIntensity: 0.0,
  // 可扩展其它默认参数
}

/**
 * 创建Three.js基础应用
 * @param {Object} [options] - 可选参数
 * @param {number} [options.fov=60] - 相机视野
 * @param {number} [options.aspect=window.innerWidth/window.innerHeight] - 相机宽高比
 * @param {number} [options.near=1] - 相机近裁剪面
 * @param {number} [options.far=100000] - 相机远裁剪面
 * @param {THREE.Vector3} [options.cameraPosition] - 相机初始位置
 * @returns {{ scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer }}
 */
export function createThreeApp(options = {}) {
  const {
    fov = 60,
    aspect = window.innerWidth / window.innerHeight,
    near = 1,
    far = 100000,
    cameraPosition = new THREE.Vector3(0, 100, 400)
  } = options

  // 创建场景
  const scene = new THREE.Scene()

  // 创建相机
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.copy(cameraPosition)

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.5

  return { scene, camera, renderer }
} 