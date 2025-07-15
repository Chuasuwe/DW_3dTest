import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import * as THREE from 'three';

// HDRI environment map loader
export class HDRILoader {
    constructor(renderer, intensity = 1.0) {
        this.renderer = renderer;
        this.intensity = intensity;
        this.scene = null; // 用于控制材质的envMapIntensity
        this.pmremGenerator = new THREE.PMREMGenerator(renderer);
        this.pmremGenerator.compileEquirectangularShader();
    }

    // Set HDRI intensity (0-2 range, 1.0 is default)
    setIntensity(value) {
        this.intensity = Math.max(0, Math.min(2, value)); // Clamp between 0-2
        this.updateIntensity();
        // 不再暴露任何其它亮度相关接口，所有逻辑只在此处
    }
    
    // Get current HDRI intensity
    getIntensity() {
        return this.intensity;
    }
    
    // Update all materials' envMapIntensity based on intensity
    updateIntensity() {
        if (this.scene) {
            this.scene.traverse((object) => {
                if (object.material) {
                    // Handle single material
                    if (object.material.envMapIntensity !== undefined) {
                        object.material.envMapIntensity = this.intensity;
                        object.material.needsUpdate = true;
                    }
                    // Handle material array
                    else if (Array.isArray(object.material)) {
                        object.material.forEach(material => {
                            if (material.envMapIntensity !== undefined) {
                                material.envMapIntensity = this.intensity;
                                material.needsUpdate = true;
                            }
                        });
                    }
                }
            });
        }
    }

    // Load HDRI environment map
    async loadHDRI(url) {
        return new Promise((resolve, reject) => {
            const loader = new EXRLoader();
            loader.load(
                url,
                (texture) => {
                    // Process HDRI texture
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

    // Set environment map to scene and store scene reference
    setEnvironmentMap(scene, envMap) {
        this.scene = scene; // 保存场景引用
        scene.environment = envMap;
        scene.background = envMap;
        
        // Apply initial intensity to existing materials
        this.updateIntensity();
    }
} 