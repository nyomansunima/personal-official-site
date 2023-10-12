<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Product Designer, Fullstack Developer',
  description:
    'Hi, iam a product designer and fullstack developer located in Bali, Indonesia',
  ogTitle: 'Product Designer, Fullstack Developer',
  ogDescription:
    'Hi, iam a product designer and fullstack developer located in Bali, Indonesia',
})
</script>

<template>
  <main class="flex flex-col pt-40 py-32 laptop:py-60 gap-28 laptop:gap-80">
    <LandingIntroSection />
    <LandingProjectSection />
    <LandingBlogSection />
    <LandingLearnSection />
    <LandingContactSection />
  </main>
</template>
