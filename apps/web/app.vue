<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger, MotionPathPlugin, ScrollToPlugin } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

const route = useRoute()

const {
  public: { host },
} = useRuntimeConfig()

// register the gsap plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin)

useSeoMeta({
  titleTemplate: '%s | Nyoman Sunima',
  ogSiteName: 'Nyoman Sunima',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  twitterCreator: '@nyomansunima',
  ogImage: `${host}/images/social-image.png`,
})

useHead({
  bodyAttrs: {
    class:
      'font-sans font-medium text-base leading-normal text-black dark:text-neutral-100 bg-light dark:bg-dark transition-all duration-1000 selection:bg-black selection:text-neutral-200 dark:selection:bg-light dark:selection:text-black',
  },
})

// register and start the animation
// use GSAP and also add soem animation in global scopes
onMounted(() => {
  const lenis = new Lenis({ duration: 4.0 })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  watch(
    () => route.path,
    () => {
      // start the animation
      // for text, elements and other
      useAnimation()
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- cursor element -->
    <CleanCursor />
  </div>
</template>
