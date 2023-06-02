<template>
  <div
    class="flex gap-16 mt-32"
    :class="[position % 2 == 0 ? 'flex-row' : 'flex-row-reverse']"
  >
    <div
      class="flex w-5/12 h-[560px] relative rounded-3xl overflow-hidden cursor-pointer mx-10"
    >
      <NuxtImg
        :src="data.image"
        class="flex h-full w-full object-cover transition-all duration-500 hover:scale-105"
      />
    </div>
    <div class="flex flex-col w-1/2 gap-10 pt-16">
      <h2 class="text-5xl font-medium leading-tight">
        {{ data.title }}
      </h2>

      <p class="leading-relaxed">
        {{ data.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
