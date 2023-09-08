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
</script>

<template>
  <main class="flex flex-col py-36 laptop:py-60 gap-40 laptop:gap-80">
    <!-- intro -->
    <section class="flex container mx-auto px-5 laptop:px-20 intro">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        Most asked question form community & other people.
      </h2>
    </section>

    <!-- lisf of questions -->
    <section
      class="flex container justify-center mx-auto px-5 laptop:px-20 gap-10"
    >
      <FaqList :data="questions" />
    </section>

    <!-- Get in touch -->
    <section
      class="flex flex-col items-center container mx-auto laptop:px-20 px-5 text-center text-5xl laptop:text-8xl"
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
        <NuxtLink to="/contact" class="font-normal dark:text-neutral-400"
          >Tell me about it</NuxtLink
        >
      </div>
    </section>
  </main>
</template>
