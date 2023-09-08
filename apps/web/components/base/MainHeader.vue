<template>
  <header
    class="fixed inset-x-0 z-40 flex items-center px-5 tablet:px-10 justify-between h-20"
  >
    <DynamicBrandIcon />
    <div class="flex items-center gap-3">
      <SwitchThemeButton />
      <PopUpMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from(['.brand', '.buttons'], {
    y: -200,
    opacity: 0,
    ease: 'back',
    stagger: 0.3,
    duration: 1.2,
  })
})
</script>
