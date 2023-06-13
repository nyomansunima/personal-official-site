<template>
  <NuxtLink
    class="flex flex-col col-span-3 row-span-4 cursor-pointer"
    :to="!data.isCommingSoon ? `/projects/${data.slug}` : undefined"
  >
    <picture
      class="flex w-full overflow-hidden h-[450px] rounded-3xl relative"
      data-cursor-size="80"
      data-cursor-icon="fi fi-sr-play"
    >
      <NuxtImg
        :src="data.thumbnail"
        class="flex h-full w-full object-cover transition-all duration-700 hover:scale-105"
      />

      <!-- tags -->
      <span
        class="flex items-center justify-center absolute top-5 right-5 px-5 py-3 bg-white dark:text-black rounded-full gap-3"
      >
        <i class="fi fi-ss-circle-small"></i>
        {{ data.tag }}</span
      >

      <!-- status -->
      <span
        class="flex items-center justify-center absolute bottom-5 left-5 px-5 py-3 bg-white dark:text-black rounded-full gap-3"
        v-show="data.isCommingSoon"
      >
        <i class="fi fi-ss-circle-small"></i>
        Comming soon</span
      >
    </picture>

    <h3 class="text-2xl mt-5 leading-tight px-3">
      {{ data.title }}
    </h3>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Project } from '~/types/content'

interface ProjectItemProps {
  data: Project
}

defineProps<ProjectItemProps>()
</script>
