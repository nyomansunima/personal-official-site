<template>
  <Teleport to="body">
    <div
      class="flex fixed z-50 h-3 w-3 rounded-full bg-black dark:bg-white will-change-transform -translate-y-1/2 -translate-x-1/2 origin-center pointer-events-none"
      ref="cursorRef"
      id="clean-cursor"
    >
      <div class="" ref="cursorInnerRef" id="clean-cursor-inner"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const cursorRef = ref<HTMLDivElement | null>(null)
const cursorInnerRef = ref<HTMLDivElement | null>(null)

// adding the effect to the cursor
// including the move, size and other things
onMounted(() => {
  const setX = gsap.quickTo('#clean-cursor', 'x', {
    ease: 'power2',
    duration: 0.7,
  })
  const setY = gsap.quickTo('#clean-cursor', 'y', {
    ease: 'power2',
    duration: 0.7,
  })

  const hideCursor = () => {
    gsap.to(cursorRef.value, {
      ease: 'expo',
      opacity: 0,
      duration: '1.2',
    })
  }

  const showCursor = () => {
    gsap.to(cursorRef.value, {
      ease: 'expo',
      opacity: 1,
      duration: '1.2',
    })
  }

  const moveCursor = (e: MouseEvent) => {
    // moving the cursor
    const x = e.clientX
    const y = e.clientY

    setX(x)
    setY(y)
  }

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
