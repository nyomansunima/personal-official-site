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

<template>
  <div
    ref="itemRef"
    class="flex flex-col gap-10 laptop:gap-16 mt-20 laptop:mt-32"
    :class="[position % 2 == 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse']"
    animation="slide-up"
  >
    <div
      class="flex w-full laptop:w-5/12 h-80 laptop:h-[560px] relative rounded-3xl overflow-hidden laptop:mx-10 image"
      animation-target
    >
      <NuxtImg
        :src="data.image"
        class="flex h-full w-full object-cover transition-all duration-500 hover:scale-105"
      />
    </div>
    <div class="flex flex-col laptop:w-1/2 gap-10 pt-16 content">
      <h2
        class="text-4xl laptop:text-7xl font-medium leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-slide-down"
      >
        {{ data.title }}
      </h2>

      <div animation="slide-up">
        <p class="leading-relaxed text-xl" animation-target>
          {{ data.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
