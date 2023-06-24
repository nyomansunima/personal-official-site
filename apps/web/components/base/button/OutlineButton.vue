<template>
  <button
    @click="link ? viewLink() : undefined"
    class="flex justify-center items-center h-16 rounded-full px-8 text-lg font-medium gap-3 border border-gray-200 dark:border-gray-800 transition-all duration-700 group hover:text-white dark:hover:text-black relative overflow-hidden"
  >
    <span
      class="absolute h-full w-full bg-black dark:bg-white transition-all duration-700 -translate-x-[110%] group-hover:translate-x-0 rounded-full"
    />
    <span class="relative flex gap-4 items-center justify-center">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps } from '~/types/component'

interface OutlineButtonProps extends BaseButtonProps {}
const { link } = defineProps<OutlineButtonProps>()

const viewLink = () => {
  if (link?.includes('https://') || link?.includes('http://')) {
    window.open(link)
  } else {
    navigateTo(link)
  }
}
</script>

<style scoped>
button:slotted(i.fi) {
  @apply text-xl;
}
</style>
