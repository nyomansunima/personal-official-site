<template>
  <button class="flex justify-center items-center gap-4 text-lg font-medium">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps } from '~/types/component'

interface TextButtonProps extends BaseButtonProps {}
defineProps<TextButtonProps>()
</script>

<style scoped>
:slotted(i.fi) {
  @apply text-2xl;
}
</style>
