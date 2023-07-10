<template>
  <main class="flex flex-col py-32 laptop:py-60 gap-40 laptop:gap-80">
    <!-- intro -->
    <section class="flex container mx-auto px-5 laptop:px-20 intro">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        Find the answer from Frequently asked questions
      </h2>
    </section>

    <!-- lisf of questions -->
    <section
      class="flex container justify-center mx-auto px-5 laptop:px-20 gap-10 question"
    >
      <ul class="flex flex-col gap-5 laptop:w-8/12">
        <FaqItem v-for="(item, index) in questions" :key="index" :data="item" />
      </ul>
    </section>

    <!-- Get in touch -->
    <section
      class="flex flex-col items-center container mx-auto px-20 text-5xl laptop:text-8xl"
      animation="slide-up"
    >
      <div animation-target>
        <h2
          class="font-medium mx-auto leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          Have a question?
        </h2>
        <NuxtLink to="/contact" class="font-normal dark:text-gray-400"
          >Tell me about it</NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { faqQuery } from '~/lib/queries'
import { Faq } from '~/types/content'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Frequently Asked Questions',
  description: 'Something help for you from other people questions',
  ogTitle: 'Frequently Asked Questions | Nyoman Sunima',
  ogDescription: 'Something help for you from other people questions',
})

const {
  data: { value: questions },
} = await useSanityQuery<Faq[]>(faqQuery)

onMounted(() => {
  useAnimation()
})
</script>
