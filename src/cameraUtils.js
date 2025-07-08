import * as THREE from 'three';

// 坐标转换：Blender Z-up → Three.js Y-up
function blenderToThreeCoords(vec) {
    return new THREE.Vector3(vec.x, vec.z, -vec.y);
}

// 计算智能注视目标
function calculateSmartLookAtTarget(cameraPosition, cameraRotation, fov) {
    const radX = cameraRotation[0] * Math.PI / 180;
    const radY = cameraRotation[1] * Math.PI / 180;
    const radZ = cameraRotation[2] * Math.PI / 180;
    
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationFromEuler(new THREE.Euler(radX, radY, radZ, 'XYZ'));
    
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyMatrix4(rotationMatrix);
    
    const distance = 50 / Math.tan((fov * Math.PI / 180) / 2);
    const target = cameraPosition.clone().add(forward.multiplyScalar(distance));
    return target;
}

// 从 JSON 加载相机预设
export async function loadCameraPresetsFromJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to load camera presets JSON');
    }
    const data = await response.json();
    return data.cameras.map(cam => {
        const position = blenderToThreeCoords(new THREE.Vector3(...cam.position));
        const lookAtTarget = blenderToThreeCoords(new THREE.Vector3(...cam.lookAtTarget));
        return {
            name: cam.name,
            position: position,
            fov: cam.fov,
            focalLength: cam.focalLength,
            lookAtTarget: lookAtTarget,
            near: cam.near,
            far: cam.far
        };
    });
}

// 相机控制器
export class CameraController {
    constructor(threeCamera, cameraPresets) {
        this.threeCamera = threeCamera;
        this.cameraPresets = cameraPresets;
        this.currentIndex = 0;
        this.basePosition = new THREE.Vector3();
        this.baseTarget = new THREE.Vector3();
        
        if (this.cameraPresets.length > 0) {
            const firstPreset = this.cameraPresets[0];
            this.basePosition.copy(firstPreset.position);
            this.baseTarget.copy(firstPreset.lookAtTarget);
        }
        
        this.setFromPreset(0);
        this.targetOffset = new THREE.Vector3();
        this.currentOffset = new THREE.Vector3();
        this._setupMouse();
    }

    setFromPreset(index) {
        if (index === this.currentIndex) return;
        if (!this.cameraPresets[index]) return;
        this._startTransition(index);
    }

    nextPreset() {
        this.setFromPreset((this.currentIndex + 1) % this.cameraPresets.length);
    }

    prevPreset() {
        this.setFromPreset((this.currentIndex - 1 + this.cameraPresets.length) % this.cameraPresets.length);
    }

    _setupMouse() {
        // 启用鼠标移动相机偏移
        window.addEventListener('mousemove', (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            let mouseY = (event.clientY / window.innerHeight) * 2 - 1;
            mouseY = -mouseY;
            // 适度缩小偏移量，保证体验自然
            this.targetOffset.set(mouseX * 0.21, mouseY * 0.105, 0);
        });
    }

    _startTransition(toIndex) {
        const toPreset = this.cameraPresets[toIndex];
        if (!toPreset) return;
        
        let toPos = toPreset.position.clone();
        let toTarget = toPreset.lookAtTarget.clone();
        this._transition = {
            fromPos: this.basePosition.clone(),
            fromTarget: this.baseTarget.clone(),
            toPos,
            toTarget,
            start: performance.now() / 1000,
            duration: 1.5,
            active: true,
            toIndex
        };
    }

    _easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    update() {
        if (this._transition && this._transition.active) {
            const now = performance.now() / 1000;
            let t = (now - this._transition.start) / this._transition.duration;
            if (t >= 1) {
                t = 1;
                this._transition.active = false;
                this.basePosition.copy(this._transition.toPos);
                this.baseTarget.copy(this._transition.toTarget);
                this.currentIndex = this._transition.toIndex;
                const preset = this.cameraPresets[this.currentIndex];
                if (preset && preset.fov) {
                    this.threeCamera.fov = preset.fov;
                    this.threeCamera.updateProjectionMatrix();
                }
            } else {
                const easeT = this._easeInOutCubic(t);
                this.basePosition.lerpVectors(this._transition.fromPos, this._transition.toPos, easeT);
                this.baseTarget.lerpVectors(this._transition.fromTarget, this._transition.toTarget, easeT);
                const fromPreset = this.cameraPresets[this.currentIndex];
                const toPreset = this.cameraPresets[this._transition.toIndex];
                if (fromPreset && toPreset && fromPreset.fov && toPreset.fov) {
                    this.threeCamera.fov = fromPreset.fov + (toPreset.fov - fromPreset.fov) * easeT;
                    this.threeCamera.updateProjectionMatrix();
                }
            }
        }
        
        this.currentOffset.lerp(this.targetOffset, 0.08);
        this.threeCamera.position.copy(this.basePosition).add(this.currentOffset);
        this.threeCamera.lookAt(this.baseTarget);
    }

    getCurrentPresetName() {
        return this.cameraPresets[this.currentIndex]?.name || '';
    }
} 