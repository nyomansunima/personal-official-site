<template>
  <footer
    class="flex flex-col border-t border-t-gray-100 dark:border-t-gray-900"
  >
    <div class="flex justify-center mt-5">
      <div class="flex items-center laptop:mr-20 justify-center px-5">
        <ul class="flex items-center list-none gap-4 flex-wrap justify-center">
          <li
            class="transition-all duration-300 hover:-translate-y-1 cursor-pointer h-12 w-12 flex justify-center items-center rounded-full border border-gray-100 dark:border-gray-800"
            data-cursor-stick
            data-cursor-size="60"
            data-cursor-exclusion
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

    <!-- credit -->
    <div
      class="flex flex-col tablet:flex-row items-center laptop:px-10 py-6 border-t border-t-gray-100 dark:border-t-gray-900 mt-5"
    >
      <span
        class="flex items-center"
        data-cursor-size="40"
        data-cursor-exclusion
        >Copyright &copy; {{ currentYear }}</span
      >

      <div class="flex laptop:flex-1"></div>
      <div class="flex items-center laptop:mr-20">
        <ul class="flex items-center gap-5">
          <li
            class="flex items-center"
            data-cursor-exclusion
            data-cursor-size="40"
          >
            <NuxtLink to="/privacy">Privacy</NuxtLink>
          </li>
          <li
            class="flex items-center"
            data-cursor-exclusion
            data-cursor-size="40"
          >
            <NuxtLink to="/terms">Terms</NuxtLink>
          </li>
        </ul>
      </div>

      <span class="flex items-center gap-4"
        >Created with <i class="fi fi-sr-heart text-red-600"></i
      ></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socials } from '~/data/social.json'
import { footer as footerMenus } from '~/data/menu.json'

const currentYear = computed(() => new Date().getFullYear())
</script>
