<template>
  <header
    class="flex fixed z-10 top-0 inset-x-0 bg-white bg-opacity-50 backdrop-blur-sm border-b border-b-gray-100 px-14 py-3"
    s
  >
    <!-- branding -->
    <div class="flex items-center gap-2">
      <NuxtLink to="/" class="h-10 w-10 relative">
        <NuxtImg src="/images/logo.png" />
      </NuxtLink>
      <NuxtLink to="/blog" class="text-xl font-semibold">Blog</NuxtLink>
    </div>

    <!-- menus -->
    <div class="flex flex-1"></div>
    <ul class="flex items-center gap-6 mr-16">
      <li
        class="flex items-center font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1"
        v-for="menu in menus"
        :key="menu.path"
      >
        {{ menu.label }}
      </li>
    </ul>

    <!-- another buttons -->
    <IconButton
      @click="
        () => {
          console.log('Hello')
        }
      "
    >
      <i class="fi fi-rr-search"></i>
    </IconButton>
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
    path: 'tips'
  },
  {
    label: 'Development',
    path: 'development'
  },
  {
    label: 'Design',
    path: 'design'
  }
]
</script>
