<template>
  <NuxtLink
    class="flex flex-col col-span-1 row-span-3 laptop:even:row-span-4 laptop:first:row-span-5 laptop:first:col-start-1 relative"
    data-cursor-size="100"
    :data-cursor-text="data.title"
    :to="data.url"
    external
    target="_blank"
  >
    <picture class="flex flex-1 min-h-[240px] rounded-2xl overflow-hidden">
      <NuxtImg
        :src="data.thumbnail"
        class="h-full w-full object-cover transition-all duration-700 hover:scale-105"
      />
    </picture>
    <div class="mt-5 text-lg">{{ data.tagline }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { App } from '~/types/content'

interface AppItemProps {
  data: App
}

defineProps<AppItemProps>()
</script>
