// 插值控制器，支持一维/多维插值和平滑动画
export class Interpolator {
  /**
   * @param {number|Array|Object} initialValue 初始值
   * @param {number} duration 插值时长（秒）
   * @param {function} easing 缓动函数，默认easeInOutCubic
   */
  constructor(initialValue, duration = 1.2, easing = Interpolator.easeInOutCubic) {
    this.currentValue = Interpolator.clone(initialValue)
    this.startValue = Interpolator.clone(initialValue)
    this.targetValue = Interpolator.clone(initialValue)
    this.duration = duration
    this.easing = easing
    this.startTime = 0
    this.progress = 1.0 // 1.0表示静止
    this.active = false
  }

  // 启动插值动画
  start(targetValue) {
    this.startValue = Interpolator.clone(this.currentValue)
    this.targetValue = Interpolator.clone(targetValue)
    this.startTime = performance.now() * 0.001
    this.progress = 0.0
    this.active = true
  }

  // 推进插值进度，返回当前值
  tick() {
    if (!this.active) return this.currentValue
    const now = performance.now() * 0.001
    let t = (now - this.startTime) / this.duration
    if (t >= 1) {
      t = 1
      this.active = false
    }
    const easeT = this.easing(t)
    this.currentValue = Interpolator.lerp(this.startValue, this.targetValue, easeT)
    this.progress = t
    return this.currentValue
  }

  // 是否正在插值中
  isActive() {
    return this.active
  }

  // 静态方法：三次缓动
  static easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  // 静态方法：深拷贝
  static clone(val) {
    if (Array.isArray(val)) return val.slice()
    if (typeof val === 'object' && val !== null) return { ...val }
    return val
  }

  // 静态方法：支持数值、数组、对象的lerp
  static lerp(a, b, t) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + (b - a) * t
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.map((v, i) => Interpolator.lerp(v, b[i], t))
    }
    if (typeof a === 'object' && typeof b === 'object') {
      const result = {}
      for (const key in a) {
        if (b.hasOwnProperty(key)) {
          result[key] = Interpolator.lerp(a[key], b[key], t)
        }
      }
      return result
    }
    return b
  }
} 