<template>
  <div class="flex flex-col">
    <span class="text-lg">{{ data.timeline }}</span>
    <h4 class="text-2xl mt-4">{{ data.rule }}</h4>
    <p class="mt-1 text-lg">{{ data.domain }}</p>
    <div class="flex mt-5">
      <p
        class="rounded-full px-3 py-2 border-2 border-gray-100 dark:border-gray-900 leading-none"
      >
        {{ data.type }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AboutCareerItemProps {
  data: any
}
defineProps<AboutCareerItemProps>()
</script>
