import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型加载器 - 负责加载 GLB 模型
export function loadGLBModel(url) {
    // 直接用 main.js 传入的 url，无需再补全 base
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => resolve(gltf),
            (progress) => console.log('Loading progress:', progress),
            (error) => reject(error)
        );
    });
} 