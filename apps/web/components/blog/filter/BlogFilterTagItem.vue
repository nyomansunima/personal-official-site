<template>
  <button
    class="flex bg-white h-14 rounded-full px-5 border border-gray-100 items-center gap-3"
    type="button"
  >
    <span class="h-2 w-2 rounded-full bg-black"></span>
    <span class="flex text-base">{{ tag }}</span>
  </button>
</template>

<script setup lang="ts">
interface BlogFilterTagItemProps {
  tag: string
}
defineProps<BlogFilterTagItemProps>()
</script>

<style scoped></style>
