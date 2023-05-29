<template>
  <button
    @click="link ? viewLink() : $emit('click')"
    class="flex justify-center items-center h-16 rounded-full px-8 text-lg font-medium gap-3 border border-gray-100 dark:border-gray-600"
    :class="class"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps, BaseButtonEmits } from '~/types/component'

interface OutlineButtonProps extends BaseButtonProps {}
const { type = 'button', link } = defineProps<OutlineButtonProps>()

interface OutlineButtonEmits extends BaseButtonEmits {}
defineEmits<OutlineButtonEmits>()

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
