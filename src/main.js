import * as THREE from 'three';
import { SkyEnvironment } from './skyEnvironment.js';
import { loadGLBModel } from './modelLoader.js';
import { loadCameraPresetsFromJSON, CameraController } from './cameraUtils.js';
import { HDRILoader } from './hdriLoader.js';
import { UILayer } from './uiLayer.js';

let scene, camera, renderer, skyEnv, cameraController, model, hdriLoader, uiLayer;
let currentSunElevation = 60; // 当前太阳高度
let targetSunElevation = 60;  // 目标太阳高度
const minElevation = -20;
const maxElevation = 60;
const presetCount = 5;
const sunLerpSpeed = 0.08; // 插值速度，越大越快
const isDev = import.meta.env.DEV;
const base = import.meta.env.BASE_URL;

async function init() {
    // 场景
    scene = new THREE.Scene();

    // 相机
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(0, 100, 400);

    // 渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    document.getElementById('app').appendChild(renderer.domElement);

    // 初始化 UI 层
    uiLayer = new UILayer({
        textCount: presetCount,
        textPrefix: 'Text',
        textExt: '.png',
        titleSrc: 'Title.png',
        assetsPath: base + 'assets/',
        fadeDuration: 600
    });

    // 初始化 HDRI 加载器
    hdriLoader = new HDRILoader(renderer);

    // 加载 HDRI 环境贴图
    try {
        const envMap = await hdriLoader.loadHDRI(base + 'assets/environment.exr');
        hdriLoader.setEnvironmentMap(scene, envMap);
        console.log('HDRI environment loaded successfully');
    } catch (error) {
        console.error('Failed to load HDRI:', error);
        // 如果 HDRI 加载失败，继续使用天空环境
    }

    // 环境光
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    // 太阳光
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 100, 100);
    scene.add(dirLight);

    // 天空环境
    skyEnv = new SkyEnvironment(scene);

    // 加载模型
    try {
        const gltf = await loadGLBModel(base + 'assets/Tower.glb');
        model = gltf.scene;
        // 保持模型在 Blender 中的原始位置
        model.rotation.x = -Math.PI / 2; // 转换 Blender Z-up 到 Three.js Y-up
        scene.add(model);
        console.log('Model loaded successfully');
    } catch (error) {
        console.error('Failed to load model:', error);
    }

    // 加载相机预设
    try {
        const cameraPresets = await loadCameraPresetsFromJSON(base + 'assets/camera_presets.json');
        if (cameraPresets.length > 0) {
            const firstPreset = cameraPresets[0];
            camera = new THREE.PerspectiveCamera(
                firstPreset.fov || 60,
                window.innerWidth / window.innerHeight,
                firstPreset.near || 0.1,
                firstPreset.far || 1000
            );
            camera.position.copy(firstPreset.position);
            camera.fov = firstPreset.fov;
            camera.near = firstPreset.near;
            camera.far = firstPreset.far;
            camera.updateProjectionMatrix();
            camera.lookAt(firstPreset.lookAtTarget);
            cameraController = new CameraController(camera, cameraPresets);
            // 初始化目标太阳高度
            targetSunElevation = getSunElevationByIndex(0);
            currentSunElevation = targetSunElevation;
            skyEnv.setSunPosition(currentSunElevation, 180);
            console.log('Camera presets loaded successfully');
        }
    } catch (error) {
        console.error('Failed to load camera presets:', error);
        // 使用默认相机
        camera.position.set(0, 100, 400);
        camera.lookAt(0, 0, 0);
    }

    // 窗口自适应
    window.addEventListener('resize', onWindowResize);

    // 相机预设切换（滚轮）
    window.addEventListener('wheel', (event) => {
        if (cameraController) {
            let prevIndex = cameraController.currentIndex;
            if (event.deltaY > 0) {
                cameraController.nextPreset();
            } else {
                cameraController.prevPreset();
            }
            // 计算目标太阳高度
            const newIndex = cameraController.currentIndex;
            targetSunElevation = getSunElevationByIndex(newIndex);
            // UI层切换文本
            uiLayer.showText(newIndex);
        }
    });

    // 首次进入时淡入第一个文本
    uiLayer.fadeInFirstText();

    animate();
}

function getSunElevationByIndex(index) {
    // 线性插值：index 0~4 -> 60~(-20)
    if (presetCount <= 1) return maxElevation;
    return maxElevation + (minElevation - maxElevation) * (index / (presetCount - 1));
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    // 太阳高度线性插值
    currentSunElevation += (targetSunElevation - currentSunElevation) * sunLerpSpeed;
    skyEnv.setSunPosition(currentSunElevation, 180);
    if (cameraController) {
        cameraController.update();
    }
    renderer.render(scene, camera);
}

init(); 