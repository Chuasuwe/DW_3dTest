import { Sky } from 'three/examples/jsm/objects/Sky.js';
import * as THREE from 'three';

// Sky environment manager
export class SkyEnvironment {
    constructor(scene) {
        this.scene = scene;
        this.sky = new Sky();
        this.sky.scale.setScalar(450000);
        this.scene.add(this.sky);

        // Default sun parameters
        this.sunParameters = {
            elevation: 2, // Sun elevation angle (degrees)
            azimuth: 180, // Azimuth angle (degrees)
        };

        // Sky shader uniforms
        this.uniforms = this.sky.material.uniforms;
        this.setSunPosition(this.sunParameters.elevation, this.sunParameters.azimuth);
    }

    // Set sun position (elevation angle, azimuth angle)
    setSunPosition(elevation, azimuth) {
        const phi = THREE.MathUtils.degToRad(90 - elevation);
        const theta = THREE.MathUtils.degToRad(azimuth);
        const sun = new THREE.Vector3();
        sun.setFromSphericalCoords(1, phi, theta);
        this.uniforms['sunPosition'].value.copy(sun);
    }

    // Dynamically update sky parameters (e.g., simulate day changes)
    update(time) {
        // time: 0~1, 0 is dawn, 0.5 is noon, 1 is night
        // Sun elevation angle range: 2~88 degrees
        const elevation = 2 + 86 * Math.sin(Math.PI * time); // morning-noon-evening
        const azimuth = 180; // Adjust as needed
        this.setSunPosition(elevation, azimuth);
    }
} 