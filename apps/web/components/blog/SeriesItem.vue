<template>
  <NuxtLink :href="`/blog/series/${data.slug}`" class="flex flex-col">
    <div
      class="flex h-64 w-full justify-center items-center overflow-hidden rounded-2xl"
    >
      <NuxtImg
        :src="data.thumbnail"
        :alt="data.title"
        class="flex h-full w-full object-cover transition-all duration-700 hover:scale-105"
      />
    </div>
    <h3 class="text-2xl mt-7 line-clamp-2">{{ data.title }}</h3>
  </NuxtLink>
</template>

<script setup lang="ts">
import { BlogSeries } from '~/types/content'

interface SeriesItemProps {
  data: BlogSeries
}
defineProps<SeriesItemProps>()
</script>
