<template>
  <footer
    class="flex flex-col border-t border-t-gray-100 dark:border-t-gray-900"
  >
    <!-- menus -->
    <div class="grid grid-cols-4 container mx-auto px-28 mt-32">
      <div
        class="flex flex-col col-span-1"
        v-for="section in footerMenus"
        :key="section.headline"
      >
        <h4 class="flex text-2xl">{{ section.headline }}</h4>
        <ul class="flex flex-col gap-5 mt-10">
          <li class="flex text-lg" v-for="menu in section.menus">
            <NuxtLink :to="menu.link">{{ menu.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- credit -->
    <div
      class="flex items-center px-10 py-6 border-t border-t-gray-100 dark:border-t-gray-900 mt-60"
    >
      <span>Copyright &copy; {{ currentYear }} - Alright Reserved</span>

      <div class="flex flex-1"></div>

      <div class="flex items-center">
        <ul class="flex list-none gap-10">
          <li
            class="transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            v-for="social in socials"
            :key="social.label"
          >
            <NuxtLink
              :to="social.url"
              external
              target="_blank"
              class="flex justify-center items-center text-2xl"
            >
              <i class="" :class="social.icon"></i>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socials } from '~/contents/social.json'
import { footer as footerMenus } from '~/contents/menu.json'

const currentYear = computed(() => new Date().getFullYear())
</script>
