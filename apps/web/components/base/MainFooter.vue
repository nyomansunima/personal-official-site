<script setup lang="ts">
import { socials } from '~/assets/data/social.json'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    class="flex flex-col border-t border-t-neutral-100 dark:border-t-neutral-900"
  >
    <!-- menus -->
    <div class="flex justify-center mt-5">
      <div class="flex items-center laptop:mr-20 justify-center px-5">
        <ul class="flex items-center list-none gap-3 flex-wrap justify-center">
          <Button
            v-for="(social, i) in socials"
            :key="i"
            size="icon"
            class="text-lg transition-all duration-700 hover:scale-95"
            data-cursor-size="48"
            data-cursor-stick
            data-cursor-exclusion
          >
            <NuxtLink
              class="h-full w-full flex justify-center items-center"
              :href="social.url"
              external
              target="_blank"
            >
              <i :class="social.icon" />
            </NuxtLink>
          </Button>
        </ul>
      </div>
    </div>

    <!-- credit -->
    <div
      class="flex flex-col tablet:flex-row items-center laptop:px-10 py-6 border-t border-t-neutral-100 dark:border-t-neutral-900 mt-5"
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
          <li
            class="flex items-center"
            data-cursor-exclusion
            data-cursor-size="40"
          >
            <NuxtLink to="/faq">FAQs</NuxtLink>
          </li>
        </ul>
      </div>

      <span class="flex items-center gap-2"
        >Created with <i class="fi fi-rr-heart"></i
      ></span>
    </div>
  </footer>
</template>
