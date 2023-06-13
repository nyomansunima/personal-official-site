<template>
  <div
    class="flex flex-col p-6 rounded-2xl border border-gray-100 dark:border-gray-800 gap-6"
    data-cursor-size="80"
    data-cursor-exclusion
    ref="itemRef"
  >
    <h3 class="text-2xl font-medium leading-tight">
      {{ position + 1 }}. {{ data.title }}
    </h3>
    <p class="text-lg leading-relaxed">
      {{ data.desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const itemRef = ref<HTMLDivElement>()

interface ServiceProcessItemProps {
  position: number
  data: {
    title: string
    desc: string
  }
}
defineProps<ServiceProcessItemProps>()

onMounted(() => {
  gsap.from(itemRef.value!, {
    y: 200,
    opacity: 0,
    ease: 'back',
    duration: 1.2,
    scrollTrigger: itemRef.value,
  })
})
</script>
