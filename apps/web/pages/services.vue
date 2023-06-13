<template>
  <main class="flex flex-col pt-60 pb-80 text-xl gap-80">
    <!-- intro section -->
    <section class="container mx-auto px-20 intro">
      <h2
        class="text-6xl font-medium leading-loose w-8/12 text-center mx-auto"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        I
        <span
          class="border-4 border-black dark:border-gray-200 px-10 py-4 rounded-full"
          >crafting</span
        >
        app that work as solution
      </h2>
    </section>

    <!-- service lists -->
    <section class="flex flex-col container mx-auto px-20 gap-32">
      <ServiceItem
        v-for="(item, index) in list"
        :data="item"
        :position="index"
        :key="index"
      />
    </section>

    <!-- process -->
    <section class="flex flex-col items-center container mx-auto px-20 process">
      <h2
        class="text-6xl font-medium w-6/12 leading-relaxed text-center"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        Where the
        <span
          class="border-4 border-black dark:border-gray-200 px-10 py-4 rounded-full"
          >great</span
        >
        things began
      </h2>

      <div class="grid grid-cols-2 gap-x-5 gap-y-8 px-28 mt-32">
        <ServiceProcessItem
          v-for="(item, index) in process"
          :data="item"
          :position="index"
          :key="index"
        />
      </div>
    </section>

    <!-- Get in touch -->
    <section class="flex flex-col items-center container mx-auto px-20">
      <h2
        class="text-6xl font-medium mx-auto leading-relaxed"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        Have an idea?
      </h2>
      <NuxtLink to="/contact" class="text-6xl font-normal dark:text-gray-400"
        >Tell me about it</NuxtLink
      >
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { list, process } from '~/data/service.json'

definePageMeta({
  layout: 'main',
})
useSeoMeta({
  title: 'Service',
  description: 'Explore my expertise and service offer',
})

onMounted(() => {
  gsap.from('section.intro h2', {
    // y: 200,
    opacity: 0,
    scale: 8,
    duration: 1.2,
  })

  gsap.from('section.process h2', {
    y: 200,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: 'section.process',
    },
  })
})
</script>
