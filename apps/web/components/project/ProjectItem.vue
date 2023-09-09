<script setup lang="ts">
import { Project } from '~/types/content'

interface ProjectItemProps {
  data: Project
  position: number
}
defineProps<ProjectItemProps>()
</script>

<template>
  <div
    class="flex flex-col items-center gap-20 laptop:gap-0 laptop:justify-between"
    :class="position % 2 == 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse'"
  >
    <div class="flex flex-col laptop:w-5/12">
      <h3 class="text-5xl leading-tight" animation="text-char-slide-down">
        {{ data.title }}.
      </h3>
      <span class="text-lg font-semibold text-neutral-600 mt-6"
        >Product Designer, Fullstack Developer</span
      >
      <p class="text-xl leading-relaxed mt-5 line-clamp-4">
        {{ data.desc }}
      </p>
      <div class="flex mt-10 items-center gap-4">
        <Button as="span" size="base" variant="secondary">Side Project</Button>
        <Button v-show="data.isCommingSoon" as="span" size="base"
          >Incoming</Button
        >
      </div>
    </div>
    <div
      class="flex w-full laptop:w-5/12 relative laptop:h-[600px] h-[340px]"
      animation="slide-up"
    >
      <NuxtLink
        :href="`/projects/${data.slug}`"
        data-cursor-size="80"
        data-cursor-text="Read"
        class="flex h-full w-full overflow-hidden rounded-2xl"
        animation-target
      >
        <NuxtImg
          :src="data.thumbnail"
          :alt="data.title"
          class="object-cover h-full w-full transition-all duration-1000 hover:scale-105"
        />
      </NuxtLink>
    </div>
  </div>
</template>
