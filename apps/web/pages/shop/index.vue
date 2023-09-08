<template>
  <main class="flex flex-col laptop:gap-80 gap-40 laptop:py-60 py-32">
    <section class="flex flex-col container mx-auto laptop:px-20 px-5 intro">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        <span class="laptop:pl-28"> </span>Because good product is solve your
        problem. Not to make you confused.
      </h2>
    </section>

    <section class="flex flex-col container mx-auto laptop:px-20 px-5">
      <!-- tags and search -->
      <div class="flex flex-col gap-10">
        <div class="flex items-center gap-5 flex-wrap laptop:w-11/12 tags">
          <div v-for="(tag, i) in tags" :key="i" class="flex item">
            <Button
              class="transition-all duration-500 hover:-translate-y-2"
              :class="
                selectedTag == tag
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : ''
              "
              @click="updateSelectedTag(tag)"
              ><i class="fi fi-rr-circle-small"></i> {{ tag }}</Button
            >
          </div>
        </div>

        <TextInput
          name="search"
          placeholder="Search your solutions"
          class="!w-4/12 input-search"
          suf-icon="fi fi-rr-search"
        />
      </div>

      <!-- Featured products -->
      <div v-show="recomendeds.length > 0" class="flex flex-col mt-16 featured">
        <h3 class="text-4xl !leading-tight">Recomended</h3>
        <div
          class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-16 mt-10 mb-28 list"
          animation="item-slide-up-scrub"
        >
          <ProductItem
            v-for="(product, i) in recomendeds"
            :key="i"
            :data="product"
            animation-target
          />
        </div>
      </div>

      <!-- all products -->
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-16 laptop:mt-36"
        animation="item-slide-up-scrub"
      >
        <ProductItem
          v-for="(product, i) in products"
          :key="i"
          :data="product"
          animation-target
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { productsQuery } from '~/lib/queries'
import { Product } from '~/types/content'

const tags = [
  'Design',
  'Template',
  'UI',
  'Apps',
  'Wordpress',
  'Webflow',
  'Goodie',
]

const selectedTag = ref<string>()
const updateSelectedTag = (tag: string) => {
  if (tag == selectedTag.value) {
    selectedTag.value = undefined
  } else {
    selectedTag.value = tag
  }
}

const {
  data: {
    value: { products, recomendeds },
  },
} = await useSanityQuery<{
  recomendeds: Product[]
  products: Product[]
}>(productsQuery)

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Shop',
  description: 'Buy goodie product that help you out',
})

onMounted(() => {
  gsap.from('.tags .item', {
    y: 200,
    opacity: 0,
    scale: 0,
    duration: 1.9,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.tags',
      scrub: true,
      end: '+=600',
    },
  })

  gsap.from('.input-search', {
    y: 100,
    opacity: 0,
    duration: 1.9,
    scrollTrigger: {
      trigger: '.input-search',
      scrub: true,
      end: '+=400',
    },
  })
})
</script>
