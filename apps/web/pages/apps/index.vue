<template>
  <main class="flex flex-col laptop:gap-80 gap-40 laptop:py-60 py-20">
    <!-- intro -->
    <section class="container mx-auto laptop:px-20 px-5 relative intro">
      <!-- the animation -->
      <svg
        width="900"
        height="600"
        viewBox="0 0 1221 715"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute -top-40 -right-20"
        id="globe-animation"
      >
        <circle
          cx="357.5"
          cy="357.5"
          r="356.5"
          transform="matrix(1 0 -0.707107 0.707107 505.581 133)"
          stroke-width="2"
          id="globe-anim-1"
          class="stroke-gray-200 dark:stroke-gray-900"
        />
        <path
          d="M528 221C528 235.912 515.912 248 501 248C486.088 248 474 235.912 474 221C474 206.088 486.088 194 501 194C515.912 194 528 206.088 528 221Z"
          id="globe-anim-1-el"
          class="fill-black dark:fill-white"
        />
        <circle
          cx="579.5"
          cy="357.5"
          r="356.5"
          stroke-width="2"
          id="globe-anim-2"
          class="stroke-gray-200 dark:stroke-gray-900"
        />
        <circle
          cx="910.5"
          cy="240.5"
          r="46.5"
          class="fill-black dark:fill-white"
          id="globe-anim-2-el"
        />
      </svg>

      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12 relative"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        <span class="laptop:pl-28"></span>
        Good apps build with dedication. Solving problem is must.
      </h2>
    </section>

    <!-- all apps -->
    <section class="flex container mx-auto laptop:px-20 px-5">
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5"
        animation="item-slide-up-scrub"
      >
        <AppItem
          v-for="(item, i) in apps"
          :key="i"
          :data="item"
          animation-target
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/all'
import { appsQuery } from '~/lib/queries'
import { App } from '~/types/content'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Appps',
  description: 'I build my own software that help someone to fix the problem',
})

const {
  data: { value: apps },
} = await useSanityQuery<App[]>(appsQuery)

// animate the everything element inside
onMounted(() => {
  MotionPathPlugin.convertToPath('#globe-anim-1')
  MotionPathPlugin.convertToPath('#globe-anim-2')

  useAnimation()

  gsap.from('#globe-animation', {
    opacity: 0,
    scale: 0,
    duration: 1.2,
  })

  gsap.to('#globe-anim-1-el', {
    duration: 5.0,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#globe-anim-1',
      align: '#globe-anim-1',
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  })

  gsap.to('#globe-anim-2-el', {
    duration: 10.0,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#globe-anim-2',
      align: '#globe-anim-2',
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  })
})
</script>
