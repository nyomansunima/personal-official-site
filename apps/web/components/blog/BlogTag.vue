<template>
  <button
    @click.prevent="viewTag"
    type="button"
    class="font-medium px-5 py-3 rounded-full border border-gray-100 dark:border-gray-700 flex justify-center items-center gap-3 transition-all duration-300 hover:-translate-y-1"
  >
    <span class="flex h-2 w-2 rounded-full bg-black dark:bg-gray-200"></span>
    {{ tag }}
  </button>
</template>

<script setup lang="ts">
interface BlogTagProps {
  tag: string
}
const { tag } = defineProps<BlogTagProps>()

const viewTag = () => {
  navigateTo(`/blog?tag=${tag}`)
}
</script>
