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
        class="text-7xl font-medium leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        {{ data.title }}
      </h2>

      <div animation="text-slide-up">
        <p class="leading-relaxed text-xl" animation-target>
          {{ data.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>
