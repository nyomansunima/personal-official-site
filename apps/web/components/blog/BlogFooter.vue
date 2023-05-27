<template>
  <footer class="flex flex-col">
    <!-- menus -->

    <!-- credit -->
    <div
      class="flex items-center justify-between px-10 py-8 border-t-2 border-t-gray-100"
    >
      <span>Copyright &copy; {{ currentYear }} - Alright Reserved </span>
      <span class="flex items-center gap-1"
        >Create with <i class="fi fi-sr-heart text-red-500"></i
      ></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped></style>
