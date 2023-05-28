<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Nyoman Sunima',
  bodyAttrs: {
    class:
      'font-sans font-medium text-base leading-normal text-black bg-white dark:bg-black'
  }
})
</script>
