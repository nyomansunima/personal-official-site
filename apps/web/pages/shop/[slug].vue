<template>
  <main class="flex flex-col py-28">
    <section
      class="flex flex-col laptop:flex-row container mx-auto px-5 gap-16"
    >
      <!-- product images -->
      <ShopImageGalery :images="product.images" />

      <!-- summaries -->
      <div class="flex flex-col laptop:w-1/2 summary-side">
        <h2
          class="text-4xl !leading-tight laptop:w-10/12 line-clamp-2"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          {{ product.title }}
        </h2>

        <div class="flex items-center mt-5 gap-4">
          <TextButton
            class="text-gray-500"
            v-for="(tag, i) in product.tags"
            :key="i"
            >{{ tag }}</TextButton
          >

          <span
            class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full cursor-pointer"
            >${{ product.initialPrice }}</span
          >
        </div>

        <p class="text-lg mt-5 line-clamp-5">
          {{ product.desc }}
        </p>

        <div class="flex items-center mt-10 gap-6">
          <div
            class="flex flex-col border-gray-100"
            v-for="(highlight, i) in product.highlights"
            :key="i"
            data-cursor-size="100"
            data-cursor-exclusion
          >
            <span class="text-xl">{{ highlight.value }}</span>
            <span class="text-gray-500">{{ highlight.property }}</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-14 gap-5">
          <OutlineButton @click="scrollToMore">
            <i class="fi fi-sr-circle-waveform-lines"></i>
            Know More</OutlineButton
          >

          <OutlineButton @click="showBuyContext">
            <i class="fi fi-sr-basket-shopping-simple"></i>
            Buy Now</OutlineButton
          >
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="flex flex-col container mx-auto px-5 mt-20 pt-16" id="more">
      <!-- main section -->
      <div class="flex flex-col gap-10 laptop:w-9/12">
        <!-- about -->
        <div
          class="flex flex-col border border-gray-100 dark:border-gray-900 px-10 py-3 rounded-2xl"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="
              () => {
                isShowAbout = !isShowAbout
              }
            "
          >
            <h2 class="text-2xl !leading-tight flex-1" data-cursor-size="40">
              About Product
            </h2>

            <i class="fi fi-sr-angle-down"></i>
          </div>

          <MarkdownContent
            v-show="isShowAbout"
            :data="product.about"
            class="mt-10"
          />
        </div>
      </div>
    </section>

    <!-- all modals -->
    <ShopBuyContextModal
      :list="product.contexts"
      :is-show="isShowBuyContext"
      @close="closeBuyContext"
    />
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { productDetailQuery } from '~/lib/queries'
import { ProductDetail } from '~/types/content'

const route = useRoute()

const {
  data: { value: product },
} = await useSanityQuery<ProductDetail>(productDetailQuery, {
  slug: route.params.slug || '',
})
definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: product.title,
  description: product.desc,
  ogTitle: `${product.title} | Nyoman Sunima`,
  ogDescription: product.desc,
})

const isShowBuyContext = ref<boolean>(false)
const isShowAbout = ref<boolean>(false)

const showBuyContext = () => {
  isShowBuyContext.value = true
}

const closeBuyContext = () => {
  isShowBuyContext.value = false
}

const scrollToMore = () => {
  gsap.to(window, {
    duration: 1.6,
    scrollTo: 'section#more',
  })
}

onMounted(() => {
  gsap.from('div.summary-side', {
    y: 200,
    opacity: 0,
    duration: 1.2,
    ease: 'back',
    delay: 0.4,
  })
})
</script>
