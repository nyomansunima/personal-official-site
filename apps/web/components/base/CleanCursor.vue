<script setup lang="ts">
import { gsap } from 'gsap'

const cursorRef = ref<HTMLDivElement>()
const cursorInnerRef = ref<HTMLDivElement>()

interface CleanCursorProps {
  cursorSize?: number
  animationEase?: string
  animationDuration?: number
  cursorExclusionBackgroundColor?: string
}

const {
  cursorSize = 12,
  animationEase = 'power2',
  animationDuration = 0.7,
  cursorExclusionBackgroundColor = '#ffffff',
} = defineProps<CleanCursorProps>()

const route = useRoute()

// adding the effect to the cursor
// including the move, size and other things
onMounted(() => {
  const isStickElement = ref<boolean>(false)

  // define the cursor setter
  const setX = gsap.quickTo('#clean-cursor', 'x', {
    ease: animationEase,
    duration: animationDuration,
  })
  const setY = gsap.quickTo('#clean-cursor', 'y', {
    ease: animationEase,
    duration: animationDuration,
  })

  const hideCursor = () => {
    gsap.to('#clean-cursor', {
      ease: 'expo',
      opacity: 0,
      duration: '1.2',
    })
  }

  const showCursor = () => {
    gsap.to('#clean-cursor', {
      ease: 'expo',
      opacity: 1,
      duration: '1.2',
    })
  }

  const moveCursor = (e: MouseEvent) => {
    // moving the cursor
    let x = e.clientX
    let y = e.clientY
    const target = e.target as HTMLElement

    if (isStickElement.value && target) {
      const bound = target.getBoundingClientRect()

      y =
        bound.top +
        target.clientHeight / 2 -
        (bound.top + target.clientHeight / 2 - e.clientY) * 0.09
      x =
        bound.left +
        target.clientWidth / 2 -
        (bound.left + target.clientWidth / 2 - e.clientX) * 0.09
    }

    setX(x)
    setY(y)
  }

  // reload and get the new element
  // when the route gotta changes
  watch(
    () => route.path,
    () => {
      // define all cursor element
      // including the size, text, image, exclusion
      const sizeEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-size]') || []
      const textEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-text]') || []
      const exclusionEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-exclusion]') || []
      const imageEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-image]') || []
      const stickEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-stick]') || []
      const colorEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-color]') || []
      const iconEls =
        document.querySelectorAll<HTMLElement>('[data-cursor-icon]') || []

      // reset the element when something chnages
      // or the route of pages are changes
      if (cursorInnerRef.value) {
        cursorInnerRef.value.innerHTML = ''
        cursorInnerRef.value.textContent = ''

        gsap.to('#clean-cursor', {
          width: cursorSize,
          height: cursorSize,
        })

        gsap.to(cursorInnerRef.value, {
          ease: 'expo',
          duration: 1.2,
          background: ``,
        })
      }

      sizeEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const size = parseFloat(el.dataset.cursorSize || '12')
          gsap.to('#clean-cursor', {
            width: size,
            height: size,
          })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to('#clean-cursor', {
            width: cursorSize,
            height: cursorSize,
          })
        })
      })

      colorEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const color = el.dataset.cursorColor || ''
          if (cursorInnerRef.value) {
            gsap.to(cursorInnerRef.value, {
              ease: 'expo',
              duration: 1.2,
              background: color,
            })
          }
        })
        el.addEventListener('mouseleave', () => {
          if (cursorInnerRef.value) {
            gsap.to(cursorInnerRef.value, {
              ease: 'expo',
              duration: 1.2,
              background: ``,
            })
          }
        })
      })

      textEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const content = el.dataset.cursorText || ''
          if (cursorInnerRef.value) {
            cursorInnerRef.value.textContent = content
          }
        })
        el.addEventListener('mouseleave', () => {
          if (cursorInnerRef.value) {
            cursorInnerRef.value.textContent = ''
          }
        })
      })
      iconEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const icon = el.dataset.cursorIcon || ''
          if (cursorInnerRef.value) {
            cursorInnerRef.value.innerHTML = `<i class="${icon}"/>`
          }
        })
        el.addEventListener('mouseleave', () => {
          if (cursorInnerRef.value) {
            cursorInnerRef.value.innerHTML = ''
          }
        })
      })

      imageEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const image = el.dataset.cursorImage || ''
          if (cursorInnerRef.value) {
            gsap.to(cursorInnerRef.value, {
              ease: 'expo',
              duration: 1.2,
              backgroundImage: `url("${image}")`,
            })
          }
        })
        el.addEventListener('mouseleave', () => {
          if (cursorInnerRef.value) {
            gsap.to(cursorInnerRef.value, {
              ease: 'expo',
              duration: 1.2,
              background: ``,
            })
          }
        })
      })

      exclusionEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (cursorRef.value) {
            cursorRef.value.style.mixBlendMode = 'exclusion'
            cursorRef.value.style.background = cursorExclusionBackgroundColor
          }
        })
        el.addEventListener('mouseleave', () => {
          const isDarkMode =
            document.querySelector<HTMLElement>('html')?.dataset.theme == 'dark'

          if (cursorRef.value) {
            cursorRef.value.style.mixBlendMode = ''
            if (isDarkMode) {
              cursorRef.value.style.background = '#ffffff'
            } else {
              cursorRef.value.style.background = '#000000'
            }
          }
        })
      })

      stickEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          isStickElement.value = true
        })
        el.addEventListener('mouseleave', () => {
          isStickElement.value = false
        })
      })

      return () => {
        sizeEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        exclusionEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        colorEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        textEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        imageEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        stickEls.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
      }
    },
    {
      immediate: true,
    },
  )

  // register all event
  window.document.addEventListener('mouseleave', hideCursor)
  window.document.addEventListener('mouseenter', showCursor)
  window.document.addEventListener('mousemove', moveCursor)

  return () => {
    window.document.removeEventListener('mouseleave', hideCursor)
    window.document.removeEventListener('mouseenter', showCursor)
    window.document.removeEventListener('mousemove', moveCursor)
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      id="clean-cursor"
      ref="cursorRef"
      class="fixed z-40 top-0 left-0 rounded-full will-change-transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-3 w-3 bg-black dark:bg-white"
    >
      <div
        id="clean-cursor-inner"
        ref="cursorInnerRef"
        class="text-white dark:text-black flex justify-center items-center h-full w-full rounded-full overflow-hidden bg-no-repeat bg-cover bg-center"
      ></div>
    </div>
  </Teleport>
</template>
