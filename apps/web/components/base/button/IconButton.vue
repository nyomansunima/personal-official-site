<template>
  <button
    class="flex justify-center items-center"
    @click="link ? viewLink() : undefined"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps } from '~/types/component'

interface IconButtonProps extends BaseButtonProps {}
const { link } = defineProps<IconButtonProps>()

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
