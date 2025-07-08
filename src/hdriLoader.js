import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import * as THREE from 'three';

// HDRI 环境贴图加载器
export class HDRILoader {
    constructor(renderer) {
        this.renderer = renderer;
        this.pmremGenerator = new THREE.PMREMGenerator(renderer);
        this.pmremGenerator.compileEquirectangularShader();
    }

    // 加载 HDRI 环境贴图
    async loadHDRI(url) {
        return new Promise((resolve, reject) => {
            const loader = new EXRLoader();
            loader.load(
                url,
                (texture) => {
                    // 处理 HDRI 贴图
                    const envMap = this.pmremGenerator.fromEquirectangular(texture).texture;
                    texture.dispose();
                    this.pmremGenerator.dispose();
                    resolve(envMap);
                },
                (progress) => {
                    console.log('HDRI loading progress:', progress);
                },
                (error) => {
                    console.error('Failed to load HDRI:', error);
                    reject(error);
                }
            );
        });
    }

    // 设置环境贴图到场景
    setEnvironmentMap(scene, envMap) {
        scene.environment = envMap;
        scene.background = envMap;
    }
} 