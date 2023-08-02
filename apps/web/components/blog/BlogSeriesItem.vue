<template>
  <NuxtLink
    :href="`/blog/${data.slug}`"
    class="flex flex-col laptop:flex-row gap-5 transition-all duration-700 hover:scale-95 group"
  >
    <div
      class="flex justify-center items-center overflow-hidden h-64 laptop:h-44 laptop:w-44 rounded-3xl relative"
    >
      <NuxtImg
        :src="data.thumbnail"
        :alt="data.title"
        class="flex h-full w-full object-cover transition-all duration-500 hover:scale-105"
      />
      <span
        class="absolute bg-white dark:bg-black transition-all rounded-full h-12 w-12 flex justify-center items-center text-xl top-2 left-2"
        >{{ position }}</span
      >
    </div>
    <div class="flex flex-col flex-1 py-2">
      <h3 class="text-2xl !leading-tight line-clamp-2">{{ data.title }}</h3>
      <div class="flex flex-wrap mt-5">
        <span
          class="flex justify-center items-center px-5 py-3 rounded-full border border-neutral-100 dark:border-neutral-800 gap-3"
        >
          <p class="h-2 w-2 rounded-full bg-black dark:bg-white"></p>
          {{ data.tag }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { BlogPost } from '~/types/content'

interface BlogSeriesItemProps {
  position: number
  data: BlogPost
}
defineProps<BlogSeriesItemProps>()
</script>
