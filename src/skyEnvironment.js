import { Sky } from 'three/examples/jsm/objects/Sky.js';
import * as THREE from 'three';

// 天空环境管理器
export class SkyEnvironment {
    constructor(scene) {
        this.scene = scene;
        this.sky = new Sky();
        this.sky.scale.setScalar(450000);
        this.scene.add(this.sky);

        // 默认太阳参数
        this.sunParameters = {
            elevation: 2, // 太阳高度角（度）
            azimuth: 180, // 方位角（度）
        };

        // Sky shader uniforms
        this.uniforms = this.sky.material.uniforms;
        this.setSunPosition(this.sunParameters.elevation, this.sunParameters.azimuth);
    }

    // 设置太阳位置（高度角 elevation, 方位角 azimuth）
    setSunPosition(elevation, azimuth) {
        const phi = THREE.MathUtils.degToRad(90 - elevation);
        const theta = THREE.MathUtils.degToRad(azimuth);
        const sun = new THREE.Vector3();
        sun.setFromSphericalCoords(1, phi, theta);
        this.uniforms['sunPosition'].value.copy(sun);
    }

    // 动态更新天空参数（如模拟一天变化）
    update(time) {
        // time: 0~1, 0为清晨，0.5为正午，1为夜晚
        // 太阳高度角范围：2~88度
        const elevation = 2 + 86 * Math.sin(Math.PI * time); // 早-中-晚
        const azimuth = 180; // 可根据需要调整
        this.setSunPosition(elevation, azimuth);
    }
} 