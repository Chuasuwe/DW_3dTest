import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import vertexShader from './shaders/stripe.vert?raw';
import fragmentShader from './shaders/stripe.frag?raw';

// Model loader - responsible for loading GLB models
export async function loadGLBModel(url) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => {
                // Traverse scene to find target mesh/material
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        console.log('[Mesh]', child.name, 'Material:', child.material && child.material.name, 'Type:', child.material && child.material.type);
                    }
                    if (child.isMesh && child.material && child.material.name === 'Lighting_Stripes') {
                        // Replace with ShaderMaterial
                        child.material = new THREE.ShaderMaterial({
                            vertexShader,
                            fragmentShader,
                            uniforms: {
                                u_time: { value: 0.0 },
                                u_resolution: { value: new THREE.Vector2(1, 1) },
                                u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
                            },
                            transparent: true
                        });
                        child.material.needsUpdate = true;
                        // Log for debug
                        console.log('[Shader Replace] Applied ShaderMaterial to mesh:', child.name, 'Material type:', child.material.type);
                    }
                });
                resolve(gltf);
            },
            (progress) => console.log('Loading progress:', progress),
            (error) => reject(error)
        );
    });
} 