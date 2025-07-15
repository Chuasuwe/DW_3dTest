// 输入事件管理器，统一管理键盘、鼠标、窗口resize等输入
export class InputManager {
  /**
   * @param {Object} callbacks - 事件回调对象，如{ onWheel, onKeyDown, onResize }
   */
  constructor(callbacks = {}) {
    this.callbacks = callbacks
    this._boundWheel = this._handleWheel.bind(this)
    this._boundKeyDown = this._handleKeyDown.bind(this)
    this._boundResize = this._handleResize.bind(this)
  }

  // 注册事件监听
  init() {
    window.addEventListener('wheel', this._boundWheel)
    window.addEventListener('keydown', this._boundKeyDown)
    window.addEventListener('resize', this._boundResize)
  }

  // 注销事件监听
  dispose() {
    window.removeEventListener('wheel', this._boundWheel)
    window.removeEventListener('keydown', this._boundKeyDown)
    window.removeEventListener('resize', this._boundResize)
  }

  // 支持动态设置回调
  setCallback(type, fn) {
    this.callbacks[type] = fn
  }

  // 内部事件分发
  _handleWheel(event) {
    if (typeof this.callbacks.onWheel === 'function') {
      this.callbacks.onWheel(event)
    }
  }
  _handleKeyDown(event) {
    if (typeof this.callbacks.onKeyDown === 'function') {
      this.callbacks.onKeyDown(event)
    }
  }
  _handleResize(event) {
    if (typeof this.callbacks.onResize === 'function') {
      this.callbacks.onResize(event)
    }
  }
} 