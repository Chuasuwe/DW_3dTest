<template>
  <div class="ui-overlay flex flex-col items-center pt-8 w-screen h-screen absolute inset-0 z-10 pointer-events-none">
    <!-- 标题图片 -->
    <img 
      :src="titleImageSrc" 
      alt="Title"
      @load="onTitleLoaded"
      class="max-w-[60vw] h-auto"
    />

    <!-- 文本图片容器 -->
    <div 
      ref="textContainer"
      class="text-image"
      :class="{ 'visible': isTextVisible }"
    >
      <img 
        :src="currentTextImageSrc" 
        :alt="`Text ${currentTextIndex + 1}`"
        @load="onTextLoaded"
        class="w-full h-auto"
      />
    </div>

    <!-- Sun & Environment Control Panel (English) -->
    <div 
      ref="sunControlPanel"
      class="sun-control-panel absolute bottom-8 right-8 text-white text-sm bg-black bg-opacity-70 p-4 rounded-lg backdrop-blur-sm pointer-events-auto"
    >
      <div class="mb-3 font-medium">Lighting Control</div>
      
      <!-- Auto/Manual Mode Switch -->
      <div class="mb-3 flex items-center">
        <label class="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            :checked="isManualSunControl"
            @change="handleModeToggle"
            class="mr-2"
          />
          <span>Manual Sun Control</span>
        </label>
      </div>
      
      <!-- Sun Elevation Slider -->
      <div class="mb-3">
        <label class="block mb-1 text-xs">Sun Elevation: <span class="font-mono">{{ sunElevation != null ? sunElevation.toFixed(1) : '--' }}°</span></label>
        <input 
          type="range" 
          min="-90" 
          max="90" 
          step="0.1"
          :value="sunElevation"
          :disabled="!isManualSunControl"
          @input="handleElevationChange"
          class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
      
      <!-- Sun Azimuth Slider -->
      <div class="mb-3">
        <label class="block mb-1 text-xs">Sun Azimuth: <span class="font-mono">{{ sunAzimuth != null ? sunAzimuth.toFixed(1) : '--' }}°</span></label>
        <input 
          type="range" 
          min="0" 
          max="360" 
          step="0.1"
          :value="sunAzimuth"
          :disabled="!isManualSunControl"
          @input="handleAzimuthChange"
          class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
      
      <!-- Environment Intensity Slider -->
      <div class="mb-3">
        <label class="block mb-1 text-xs">Environment Intensity: <span class="font-mono">{{ hdriIntensity != null ? hdriIntensity.toFixed(2) : '--' }}</span></label>
        <input 
          type="range" 
          min="0" 
          max="3" 
          step="0.01"
          :value="hdriIntensity"
          @input="handleHdriIntensityChange"
          class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
      
      <!-- Reset Button -->
      <button 
        @click="handleResetToPreset"
        class="w-full px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors"
      >
        Reset to Preset
      </button>
    </div>

    <!-- 移除相机预设名称显示和导航提示UI -->
    <!--
    <div 
      v-if="currentPresetName && showPresetName"
      ref="presetNameContainer"
      class="absolute bottom-8 left-8 text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-sm"
    >
      {{ currentPresetName }}
    </div>

    <div 
      v-if="showNavHint"
      ref="navHintContainer"
      class="absolute bottom-8 right-8 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded-lg backdrop-blur-sm"
    >
      Use ← → or A D to navigate
    </div>
    -->
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger)

// Props
const props = defineProps({
  currentPresetName: {
    type: String,
    default: ''
  },
  textCount: {
    type: Number,
    default: 5
  },
  textPrefix: {
    type: String,
    default: 'Text'
  },
  textExt: {
    type: String,
    default: '.png'
  },
  titleSrc: {
    type: String,
    default: 'Title.png'
  },
  fadeDuration: {
    type: Number,
    default: 600
  },
  sunElevation: {
    type: Number,
    default: -20
  },
  sunAzimuth: {
    type: Number,
    default: 120
  },
  isManualSunControl: {
    type: Boolean,
    default: false
  },
  hdriIntensity: {
    type: Number,
    default: 1.0
  }
})

// Emits
const emit = defineEmits([
  'next-preset', 
  'prev-preset',
  'sun-elevation-change',
  'sun-azimuth-change',
  'sun-control-mode-change',
  'reset-sun-to-preset',
  'hdri-intensity-change'
])

// Template refs
const titleContainer = ref(null)
const textContainer = ref(null)
const presetNameContainer = ref(null)
const navHintContainer = ref(null)

// 响应式数据
const currentTextIndex = ref(0)
const isTextVisible = ref(false)
const showPresetName = ref(false)
const showNavHint = ref(false)
const assetsPath = import.meta.env.BASE_URL + 'assets/'

// 计算属性
const titleImageSrc = computed(() => {
  return assetsPath + props.titleSrc
})

const currentTextImageSrc = computed(() => {
  return assetsPath + `${props.textPrefix}${String(currentTextIndex.value + 1).padStart(2, '0')}${props.textExt}`
})

// GSAP 时间轴
let titleTimeline = null
let textTimeline = null

// 初始化入场动画
const initEntranceAnimation = () => {
  // 标题入场动画 - 使用更流畅的动画序列
  if (titleContainer.value) {
    titleTimeline = gsap.timeline()
    
    // 设置初始状态
    gsap.set(titleContainer.value, {
      y: -100,
      opacity: 0,
      scale: 0.8,
      rotationX: -15
    })
    
    // 复杂的入场动画序列
    titleTimeline
      .to(titleContainer.value, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.3
      })
      // 添加微妙的悬浮效果
      .to(titleContainer.value, {
        y: -5,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
  }

  // 导航提示延迟显示 - 增强动画效果
  setTimeout(() => {
    showNavHint.value = true
    if (navHintContainer.value) {
      gsap.fromTo(navHintContainer.value, 
        {
          x: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.8)"
        }
      )
    }
  }, 2500)
}

// 文本切换动画
const animateTextChange = (newIndex) => {
  if (!textContainer.value) return

  // 创建新的时间轴
  if (textTimeline) {
    textTimeline.kill()
  }
  
  textTimeline = gsap.timeline()
  
  // 如果当前有文本显示，先淡出
  if (isTextVisible.value) {
    textTimeline.to(textContainer.value, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        currentTextIndex.value = newIndex
        // 等待下一帧更新图片源
        nextTick(() => {
          animateTextIn()
        })
      }
    })
  } else {
    // 直接显示新文本
    currentTextIndex.value = newIndex
    nextTick(() => {
      animateTextIn()
    })
  }
}

// 文本入场动画 - 增强视觉效果
const animateTextIn = () => {
  if (!textContainer.value) return
  
  gsap.fromTo(textContainer.value, 
    {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotationY: 15,
      filter: "blur(10px)"
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
      onStart: () => {
        isTextVisible.value = true
      }
    }
  )
}

// 预设名称动画
const animatePresetName = () => {
  if (!presetNameContainer.value) return
  
  gsap.fromTo(presetNameContainer.value,
    {
      x: -30,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }
  )
}

// 监听当前预设名称变化
watch(() => props.currentPresetName, (newName, oldName) => {
  if (newName && newName !== oldName) {
    showPresetName.value = true
    
    // 延迟执行动画，确保DOM更新
    nextTick(() => {
      animatePresetName()
    })
    
    // 更新文本索引（假设预设索引对应文本索引）
    // 这里可以根据实际需求调整逻辑
    const presetIndex = getPresetIndex(newName)
    if (presetIndex !== -1 && presetIndex !== currentTextIndex.value) {
      animateTextChange(presetIndex)
    }
  }
})

// 根据预设名称获取索引（简化实现）
const getPresetIndex = (presetName) => {
  // 这里应该根据实际的预设名称来确定索引
  // 目前简化为解析预设名称中的数字
  const match = presetName.match(/(\d+)/)
  if (match) {
    const index = parseInt(match[1]) - 1
    return Math.max(0, Math.min(index, props.textCount - 1))
  }
  return 0
}

// 图片加载完成回调
const onTitleLoaded = () => {
  console.log('Title image loaded')
}

const onTextLoaded = () => {
  console.log('Text image loaded')
}

// 太阳控制事件处理
const handleModeToggle = (event) => {
  emit('sun-control-mode-change', event.target.checked)
}

const handleElevationChange = (event) => {
  emit('sun-elevation-change', parseFloat(event.target.value))
}

const handleAzimuthChange = (event) => {
  emit('sun-azimuth-change', parseFloat(event.target.value))
}

const handleResetToPreset = () => {
  emit('reset-sun-to-preset')
}

// Environment intensity slider event
const handleHdriIntensityChange = (event) => {
  emit('hdri-intensity-change', parseFloat(event.target.value))
}

// 处理键盘事件（作为备用，主要由ThreeScene处理）
const handleKeyDown = (event) => {
  switch (event.code) {
    case 'ArrowRight':
    case 'KeyD':
      emit('next-preset')
      break
    case 'ArrowLeft':
    case 'KeyA':
      emit('prev-preset')
      break
  }
}

// 组件挂载后初始化
onMounted(() => {
  // 初始化入场动画
  initEntranceAnimation()
  
  // 显示第一个文本
  setTimeout(() => {
    animateTextChange(0)
  }, 1500)
  
  // 添加键盘事件监听（备用）
  window.addEventListener('keydown', handleKeyDown)
})

// 组件卸载时清理
onUnmounted(() => {
  // 清理GSAP时间轴
  if (titleTimeline) {
    titleTimeline.kill()
  }
  if (textTimeline) {
    textTimeline.kill()
  }
  
  // 移除事件监听
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
/* 组件特定样式 */
.ui-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.title-image {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  max-width: 60vw;
  height: auto;
  z-index: 11;
}

.text-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  max-width: 60vw;
  height: auto;
  z-index: 10;
}

.text-image.visible {
  opacity: 1;
}

/* 太阳控制面板样式 */
.sun-control-panel {
  min-width: 200px;
  user-select: none;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 2px solid #4a5568;
}

.slider::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 2px solid #4a5568;
}

.slider:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
  background: #9ca3af;
}

.slider:disabled::-moz-range-thumb {
  cursor: not-allowed;
  background: #9ca3af;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title-image,
  .text-image {
    max-width: 80vw;
  }
  
  .sun-control-panel {
    bottom: 4px;
    right: 4px;
    min-width: 180px;
    font-size: 12px;
  }
}
</style> 