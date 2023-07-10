<template>
  <main class="flex flex-col pt-60 pb-80 text-xl gap-80">
    <!-- intro section -->
    <section class="container mx-auto px-20 intro">
      <h2
        class="text-5xl laptop:text-8xl font-medium !leading-tight w-10/12 text-center mx-auto"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-slide-up"
      >
        I craft product that that work for high solutions.
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
        class="text-5xl laptop:text-8xl font-medium laptop:w-10/12 !leading-tight text-center"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        Here are where the great thing come from.
      </h2>

      <div
        class="grid grid-cols-1 laptop:grid-cols-2 gap-x-5 gap-y-5 laptop:gap-y-8 laptop:px-28 mt-20 laptop:mt-32"
        animation="item-slide-up-scrub"
      >
        <ServiceProcessItem
          v-for="(item, index) in process"
          :data="item"
          :position="index"
          :key="index"
          animation-target
        />
      </div>
    </section>

    <!-- Get in touch -->
    <section
      class="flex flex-col items-center container mx-auto px-20"
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
          class="text-5xl laptop:text-8xl font-normal dark:text-gray-400"
          >Tell me about it</NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { list, process } from '~/assets/data/service.json'

definePageMeta({
  layout: 'main',
})
useSeoMeta({
  title: 'Service',
  description: 'Explore my expertise and service offer',
})

onMounted(() => {
  useAnimation()
})
</script>
