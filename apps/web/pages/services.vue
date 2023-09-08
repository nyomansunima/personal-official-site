<script setup lang="ts">
import { list, process } from '~/assets/data/service.json'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Services',
  description: 'Explore my expertise and service offer',
  ogTitle: 'Services | Nyoman Sunima',
  ogDescription: 'Explore my expertise and service offer',
})
</script>

<template>
  <main
    class="flex flex-col laptop:pt-60 pt-32 laptop:pb-80 pb-40 text-xl laptop:gap-80 gap-32"
  >
    <!-- intro section -->
    <section class="container mx-auto laptop:px-20 px-5">
      <h2
        class="text-5xl laptop:text-8xl font-medium !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-slide-up"
      >
        I craft products that provide high quality solutions.
      </h2>

      <div class="flex flex-col laptop:w-8/12 mt-24" animation="slide-up">
        <p class="text-xl leading-relaxed" animation-target>
          In today's fast-paced digital landscape, having a dynamic and
          user-friendly app is no longer a luxury; it's a necessity. I
          understand the importance of staying ahead in the ever-evolving world
          of technology. That's why I offer cutting-edge services that bring
          your vision to life and drive your business forward.
        </p>
      </div>
    </section>

    <!-- service lists -->
    <section
      class="flex flex-col container mx-auto laptop:px-20 px-5 laptop:gap-32 gap-16"
    >
      <ServiceItem
        v-for="(item, i) in list"
        :key="i"
        :data="item"
        :position="i"
      />
    </section>

    <!-- process -->
    <section class="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        class="text-5xl laptop:text-8xl font-medium laptop:w-10/12 !leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        Here is where the great things come from.
      </h2>

      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-5 gap-y-5 laptop:gap-y-8 mt-20 laptop:mt-32"
        animation="item-slide-up-scrub"
      >
        <ServiceProcessItem
          v-for="(item, index) in process"
          :key="index"
          :data="item"
          :position="index"
          animation-target
        />
      </div>
    </section>

    <!-- Get in touch -->
    <section
      class="flex flex-col items-center container mx-auto laptop:px-20 px-5"
      animation="slide-up"
    >
      <div animation-target>
        <h2
          class="text-5xl laptop:text-8xl font-medium mx-auto leading-relaxed"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          Have an idea?
        </h2>
        <NuxtLink
          to="/contact"
          class="text-5xl laptop:text-8xl font-normal dark:text-neutral-400 text-center"
          >Tell me about it</NuxtLink
        >
      </div>
    </section>
  </main>
</template>
