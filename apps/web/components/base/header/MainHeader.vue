<template>
  <header
    class="flex items-center fixed z-10 top-0 inset-x-0 bg-white dark:bg-black px-10 py-3 border-b border-gray-100 dark:border-b-gray-900"
  >
    <!-- brands -->
    <NuxtLink
      to="/"
      class="flex items-center h-10 w-10 transition-all duration-300 hover:scale-95 dark:bg-white rounded-full dark:p-2"
    >
      <NuxtImg src="/images/logo.png" class="flex w-full h-full" />
    </NuxtLink>

    <!-- menus -->
    <div class="flex flex-1"></div>
    <div class="flex mr-16">
      <ul class="flex items-center gap-10">
        <li
          v-for="menu in header"
          :key="menu.path"
          class="font-medium transition-all duration-300 hover:-translate-y-1"
        >
          <NuxtLink class="" :to="menu.path">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <IconButton><i class="fi fi-rr-box-heart text-xl"></i></IconButton>
  </header>
</template>

<script setup lang="ts">
import { header } from '~/contents/menu.json'
</script>
