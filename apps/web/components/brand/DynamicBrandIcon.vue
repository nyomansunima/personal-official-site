<template>
  <div
    class="flex items-center border border-neutral-100 dark:border-neutral-800 rounded-full brand gap-2 p-2 text-lg"
  >
    <NuxtLink
      to="/"
      class="flex items-center transition-all duration-300 hover:scale-95"
    >
      <DynamicLogo class="h-7 w-7" />
    </NuxtLink>
    <NuxtLink v-show="$route.path.includes('/blog')" to="/blog">Blog</NuxtLink>
    <NuxtLink v-show="$route.path.includes('/shop')" to="/shop">Shop</NuxtLink>
  </div>
</template>
