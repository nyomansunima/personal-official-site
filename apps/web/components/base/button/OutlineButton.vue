<template>
  <button
    @click.prevent="$emit('click')"
    class="flex justify-center items-center h-16 rounded-full px-8 text-lg font-medium gap-3 border border-gray-100"
    :class="class"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps, BaseButtonEmits } from '~/types/component'

interface OutlineButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<OutlineButtonProps>()

interface OutlineButtonEmits extends BaseButtonEmits {}
const emit = defineEmits<BaseButtonEmits>()
</script>

<style scoped>
button:slotted(i.fi) {
  @apply text-xl;
}
</style>
