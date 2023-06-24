<template>
  <div class="flex flex-col laptop:w-1/2">
    <picture
      class="flex h-80 laptop:h-[520px] rounded-3xl overflow-hidden main-image"
      data-cursor-size="80"
      data-cursor-exclusion
    >
      <NuxtImg
        :src="activeImage"
        class="flex h-full w-full object-cover transition-all duration-1000 hover:scale-105"
      />
    </picture>
    <div class="flex items-center mt-10 gap-4">
      <button
        class="h-16 w-16 rounded-2xl overflow-hidden border-2 border-transparent cursor-pointer item-image"
        :class="activeImage == image ? '!border-black dark:!border-white' : ''"
        v-for="(image, i) in images"
        :key="i"
        @click="
          () => {
            activeImage = image
          }
        "
      >
        <NuxtImg :src="image" class="flex h-full w-full object-cover" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const activeImage = ref<string>()

interface ShopImageGaleryProps {
  images: string[]
}
const { images } = defineProps<ShopImageGaleryProps>()
activeImage.value = images[0]

onMounted(() => {
  gsap
    .timeline({
      defaults: {
        ease: 'power2',
        delay: 0,
      },
    })
    .from('picture.main-image', {
      y: 200,
      duration: 1.2,
      opacity: 0,
    })
    .from('button.item-image', {
      y: 200,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
    })
})
</script>
