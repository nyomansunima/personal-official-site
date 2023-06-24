<template>
  <header
    class="fixed top-5 inset-x-0 z-40 flex items-center px-5 tablet:px-10"
  >
    <!-- brands -->
    <!-- work for multiple page except blog -->
    <div
      class="flex items-center p-2 border border-gray-100 rounded-full bg-white dark:text-black brand gap-3"
    >
      <NuxtLink
        to="/"
        class="flex items-center h-8 w-8 transition-all duration-300 hover:scale-95"
      >
        <NuxtImg src="/images/logo.png" class="flex w-full h-full" />
      </NuxtLink>

      <!-- only show if the route -->
      <!-- is on blog post -->
      <NuxtLink
        to="/blog"
        v-show="$route.path.includes('/blog')"
        class="text-lg font-semibold mr-3"
        >Blog</NuxtLink
      >

      <!-- is on shop -->
      <NuxtLink
        to="/shop"
        v-show="$route.path.includes('/shop')"
        class="text-lg font-semibold mr-3"
        >Shop</NuxtLink
      >
    </div>

    <div class="flex flex-1"></div>

    <div class="shop mr-5">
      <IconButton
        link="/shop"
        class="flex justify-center items-center h-10 w-10 rounded-full bg-black text-white transition-all duration-500 hover:scale-95 dark:bg-white dark:text-black"
        ><i class="fi fi-sr-basket-shopping-simple"></i
      ></IconButton>
    </div>

    <!-- actions to menu and donations -->
    <div
      class="flex items-center gap-3 p-2 border border-gray-200 dark:border-gray-800 rounded-full buttons"
    >
      <IconButton
        @click="toggleDonation"
        class="flex justify-center items-center h-10 w-10 rounded-full bg-black text-white transition-all duration-500 hover:scale-95 dark:bg-white dark:text-black"
        ><i class="fi fi-sr-circle-heart"></i
      ></IconButton>

      <IconButton
        @click="toggleMenu"
        class="flex justify-center items-center h-10 w-10 rounded-full bg-black text-white transition-all duration-500 hover:scale-95 dark:bg-white dark:text-black"
        ><i class="fi fi-sr-apps-add"></i
      ></IconButton>
    </div>

    <!-- modal menus -->
    <MainMenuModal
      :is-show="isShowMenu"
      @close="
        () => {
          isShowMenu = false
        }
      "
    />
    <DonationModal
      :is-show="isShowDonation"
      @close="
        () => {
          isShowDonation = false
        }
      "
    />
  </header>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const isShowMenu = ref<boolean>(false)
const isShowDonation = ref<boolean>(false)

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const toggleDonation = () => {
  isShowDonation.value = !isShowDonation.value
}

onMounted(() => {
  gsap.from(['.brand', '.buttons', '.shop'], {
    y: -200,
    opacity: 0,
    ease: 'back',
    stagger: 0.3,
    duration: 1.2,
  })
})
</script>
