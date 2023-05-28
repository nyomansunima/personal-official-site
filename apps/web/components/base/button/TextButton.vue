<template>
  <button
    @click.prevent="$emit('click')"
    class="flex justify-center items-center gap-4 text-lg font-medium"
    :class="class"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps, BaseButtonEmits } from '~/types/component'

interface TextButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<TextButtonProps>()

interface TextButtonEmits extends BaseButtonEmits {}
const emit = defineEmits<BaseButtonEmits>()
</script>

<style scoped>
button:slotted(i.fi) {
  @apply text-xl;
}
</style>
