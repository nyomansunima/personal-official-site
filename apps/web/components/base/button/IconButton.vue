<template>
  <button
    @click.prevent="$emit('click')"
    class="flex justify-center items-center"
    :class="class"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps, BaseButtonEmits } from '~/types/component'

interface IconButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<IconButtonProps>()

interface IconButtonEmits extends BaseButtonEmits {}
const emit = defineEmits<BaseButtonEmits>()
</script>

<style scoped>
button:slotted(i.fi) {
  @apply text-xl;
}
</style>
