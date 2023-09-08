<template>
  <main class="pt-40">
    <!-- not found -->
    <section
      v-if="error.statusCode == 404"
      class="flex flex-col items-center container mx-auto px-20"
    >
      <h2 class="text-[200px]">404</h2>
      <h3 class="text-6xl w-7/12 text-center">
        Opps, something <span class="text-neutral-400">missing</span>
      </h3>

      <div class="flex justify-center mt-16">
        <Button @click="handleError">Back Home</Button>
      </div>
    </section>
  </main>
</template>
<script setup>
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  bodyAttrs: {
    class:
      'font-sans font-medium text-base leading-normal text-black dark:text-neutral-100 bg-white dark:bg-black transition-all duration-1000',
  },
})
</script>
