<template>
  <button
    class="flex justify-center items-center"
    :class="$props.class"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps } from '~/types/component'

interface IconButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<IconButtonProps>()
</script>

<style scoped>
button:slotted(i.fi) {
  @apply text-xl;
}
</style>
