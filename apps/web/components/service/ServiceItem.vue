<template>
  <div
    class="flex gap-16 mt-32 service-item"
    :class="[position % 2 == 0 ? 'flex-row' : 'flex-row-reverse']"
    ref="itemRef"
  >
    <div
      class="flex w-5/12 h-[560px] relative rounded-3xl overflow-hidden cursor-pointer mx-10 image"
      data-cursor-icon="fi fi-sr-video-camera-alt"
      data-cursor-size="80"
    >
      <NuxtImg
        :src="data.image"
        class="flex h-full w-full object-cover transition-all duration-500 hover:scale-105"
      />
    </div>
    <div class="flex flex-col w-1/2 gap-10 pt-16 content">
      <h2
        class="text-5xl font-medium leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        {{ data.title }}
      </h2>

      <p class="leading-relaxed text-lg">
        {{ data.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const itemRef = ref<HTMLDivElement>()

interface ServiceItemProps {
  position: number
  data: {
    image: string
    title: string
    desc: string
  }
}
defineProps<ServiceItemProps>()

onMounted(() => {
  gsap.from(itemRef.value?.querySelector('.image')!, {
    y: 200,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: itemRef.value,
      start: 'top 75%',
    },
  })
  gsap.from(itemRef.value?.querySelector('.content')!, {
    opacity: 0,
    duration: 1.2,
    delay: 0.7,
    scrollTrigger: {
      trigger: itemRef.value,
      start: 'top 90%',
    },
  })
})
</script>
