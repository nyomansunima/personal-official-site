<template>
  <div
    class="block col-span-1 border-l border-gray-200 dark:border-gray-800 py-16 px-5"
    :data-cursor-size="data.image ? '300' : '20'"
    :data-cursor-image="data.image"
  >
    <span class="text-lg text-neutral-400">{{ data.timeline }}</span>
    <span
      v-show="data.isStory"
      class="leading-none px-3 py-2 rounded-full bg-lime-300 ml-2 text-base text-black"
      >New</span
    >
    <h3 class="text-xl mt-3 block">{{ data.title }}</h3>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '~/types/content'

interface AboutTimelineItemProps {
  data: Timeline
}
defineProps<AboutTimelineItemProps>()
</script>
