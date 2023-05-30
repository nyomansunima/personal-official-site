<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <CleanCursor />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// register the gsap plugins
gsap.registerPlugin(ScrollTrigger)

// scroll smoother using lenis
onMounted(() => {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

useHead({
  titleTemplate: '%s | Nyoman Sunima',
  bodyAttrs: {
    class:
      'font-sans font-medium text-base leading-normal text-black dark:text-gray-100 bg-white dark:bg-black transition-all duration-1000',
  },
})
</script>
