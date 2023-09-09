<script setup lang="ts">
const {
  public: { host },
} = useRuntimeConfig()

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'DigiHub',
  description: 'Lorem ipsum dolor immer',
  ogTitle: 'DigiHub | Nyoman Sunima',
  ogDescription: 'Lorem ipsum dolor immer',
  ogImage: `${host}/`,
})
</script>

<template>
  <main class="flex flex-col"></main>
</template>
