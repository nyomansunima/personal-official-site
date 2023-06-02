<template>
  <header
    class="flex fixed z-20 top-0 inset-x-0 bg-white dark:bg-black bg-opacity-50 backdrop-blur-sm border-b border-b-gray-100 dark:border-b-gray-800 px-10 py-3"
    s
  >
    <!-- branding -->
    <div class="flex items-center gap-2">
      <NuxtLink
        to="/"
        class="h-10 w-10 p-2 relative dark:bg-white rounded-full"
      >
        <NuxtImg src="/images/logo.png" />
      </NuxtLink>
      <NuxtLink to="/blog" class="text-xl font-semibold">Blog</NuxtLink>
    </div>

    <!-- menus -->
    <div class="flex flex-1"></div>
    <ul class="flex items-center gap-6 mr-16">
      <li
        class="flex items-center font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1"
        @click.prevent="viewTag(menu.path)"
        v-for="menu in menus"
        :key="menu.path"
      >
        {{ menu.label }}
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
interface Menu {
  label: string
  path: string
}

const menus: Menu[] = [
  {
    label: 'Tips',
    path: 'tips',
  },
  {
    label: 'Development',
    path: 'development',
  },
  {
    label: 'Design',
    path: 'design',
  },
]

const viewTag = (tag: string) => {
  navigateTo(`/blog?tag=${tag}`)
}
</script>
