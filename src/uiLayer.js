// uiLayer.js
// 负责UI层的DOM创建、切换、动画和资源管理

const base = import.meta.env.BASE_URL;

export class UILayer {
    constructor(options = {}) {
        this.textCount = options.textCount || 5;
        this.textPrefix = options.textPrefix || 'Text';
        this.textExt = options.textExt || '.png';
        this.titleSrc = options.titleSrc || 'Title.png';
        this.assetsPath = options.assetsPath || (import.meta.env.BASE_URL + 'assets/');
        this.fadeDuration = options.fadeDuration || 600; // ms

        this.currentIndex = 0;
        this.textImg = null;
        this.titleImg = null;
        this._initDOM();
    }

    _initDOM() {
        // 创建UI根节点
        this.root = document.createElement('div');
        this.root.id = 'ui-root';
        this.root.style.position = 'fixed';
        this.root.style.left = '0';
        this.root.style.top = '0';
        this.root.style.width = '100vw';
        this.root.style.height = '100vh';
        this.root.style.pointerEvents = 'none';
        this.root.style.zIndex = '10';

        // Title
        this.titleImg = document.createElement('img');
        this.titleImg.id = 'ui-title';
        this.titleImg.src = this.assetsPath + this.titleSrc;
        this.titleImg.style.position = 'absolute';
        this.titleImg.style.top = '32px';
        this.titleImg.style.left = '50%';
        this.titleImg.style.transform = 'translateX(-50%)';
        this.titleImg.style.pointerEvents = 'none';
        this.titleImg.style.maxWidth = '60vw';
        this.titleImg.style.height = 'auto';
        this.titleImg.style.zIndex = '11';
        this.root.appendChild(this.titleImg);

        // Text
        this.textImg = document.createElement('img');
        this.textImg.id = 'ui-text';
        this.textImg.src = this._getTextSrc(0);
        this.textImg.style.position = 'absolute';
        this.textImg.style.top = '50%';
        this.textImg.style.left = '50%';
        this.textImg.style.transform = 'translate(-50%, -50%)';
        this.textImg.style.opacity = '0';
        this.textImg.style.transition = `opacity ${this.fadeDuration}ms`;
        this.textImg.style.pointerEvents = 'none';
        this.textImg.style.maxWidth = '60vw';
        this.textImg.style.height = 'auto';
        this.textImg.style.zIndex = '12';
        this.root.appendChild(this.textImg);

        document.body.appendChild(this.root);
    }

    _getTextSrc(index) {
        const num = (index + 1).toString().padStart(2, '0');
        return `${this.assetsPath}${this.textPrefix}${num}${this.textExt}`;
    }

    showText(index) {
        if (index === this.currentIndex) return;
        this.currentIndex = index;
        // 淡出当前
        this.textImg.style.opacity = '0';
        setTimeout(() => {
            this.textImg.src = this._getTextSrc(index);
            this.textImg.style.opacity = '1';
        }, this.fadeDuration);
    }

    // 首次进入时淡入第一个文本
    fadeInFirstText() {
        setTimeout(() => {
            this.textImg.style.opacity = '1';
        }, 100);
    }
} 