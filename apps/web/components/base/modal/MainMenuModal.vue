<template>
  <Teleport to="body">
    <div
      v-show="isShow"
      class="flex flex-col fixed top-24 right-16 px-1 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black z-30 w-[280px]"
    >
      <h3
        class="flex border-b border-b-gray-100 dark:border-b-gray-800 pb-2 font-semibold px-4"
      >
        Menus
      </h3>

      <ul class="flex flex-col w-full gap-1 pt-3">
        <li
          class="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-900"
          v-for="{ label, path } in header"
          :key="path"
        >
          <span class="bg-black h-1 w-1 rounded-full dark:bg-white"></span>
          <NuxtLink
            class="flex gap-3 w-full"
            :to="path"
            :external="path.includes('http')"
          >
            {{ label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { header } from '~/data/menu.json'

interface MainMenuModalProps {
  isShow?: boolean
}
defineProps<MainMenuModalProps>()
</script>
