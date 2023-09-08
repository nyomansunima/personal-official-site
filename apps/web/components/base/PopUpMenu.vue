<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'radix-vue'

export interface MenuItem {
  label: string
  link: string
  icon: string
}

const menus: MenuItem[] = [
  {
    label: 'My works',
    link: '/projects',
    icon: 'fi fi-rr-paper-plane',
  },
  {
    label: 'What i did',
    link: '/services',
    icon: 'fi fi-rr-bolt',
  },
  {
    label: 'Get in touch',
    link: '/contact',
    icon: 'fi fi-rr-heart',
  },
  {
    label: 'About me',
    link: '/about',
    icon: 'fi fi-rr-star',
  },
  {
    label: 'Buy something',
    link: '/shop',
    icon: 'fi fi-rr-shopping-bag',
  },
]
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child aria-label="popup-menu">
      <Button size="icon" class="buttons">
        <i class="fi fi-rr-hamburger" />
      </Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="bg-light p-4 rounded-2xl border border-neutral-100 w-64 mr-10 z-50 dark:bg-dark dark:border-neutral-800"
      >
        <nav class="flex flex-col w-full">
          <ul class="flex flex-col w-full">
            <li
              v-for="({ icon, label, link }, i) in menus"
              :key="i"
              class="flex items-center w-full"
            >
              <NuxtLink
                :href="link"
                class="flex items-center gap-3 text-base transition-all duration-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-2.5 rounded-xl w-full"
              >
                <i :class="icon" />
                <span> {{ label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
