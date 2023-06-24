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
import { ScrollTrigger, MotionPathPlugin, ScrollToPlugin } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

const {
  public: { host },
} = useRuntimeConfig()

// register the gsap plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin)

// scroll smoother using lenis
onMounted(() => {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

useSeoMeta({
  titleTemplate: '%s | Nyoman Sunima',
  ogSiteName: 'Nyoman Sunima',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  twitterCreator: '@nyomansunima',
})

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: `${host}/images/logo.png` }],
  bodyAttrs: {
    class:
      'font-sans font-medium text-base leading-normal text-black dark:text-gray-100 bg-white dark:bg-black transition-all duration-1000 selection:bg-black selection:text-gray-200 dark:selection:bg-white dark:selection:text-black',
  },
})
</script>
