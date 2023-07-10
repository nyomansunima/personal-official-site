<template>
  <main class="flex flex-col laptop:py-60 py-32 gap-28 laptop:gap-80">
    <section class="flex container mx-auto laptop:px-20 intro">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12 text-center mx-auto"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        Because too perfect is a mistake. Just make it run in incredible way.
      </h2>
    </section>

    <section class="flex container mx-auto px-5 laptop:px-20 projects">
      <div
        class="grid grid-cols-3 tablet:grid-cols-6 laptop:grid-cols-9 gap-x-6 gap-y-16"
        animation="item-slide-up-scrub"
      >
        <ProjectItem
          v-for="item in projects"
          :key="item.slug"
          :data="item"
          animation-target
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { projectQuery } from '~/lib/queries'
import { Project } from '~/types/content'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Projects',
  description: 'Everything i sbuild using special treatment',
  ogTitle: 'Projects | Nyoman Sunima',
  ogDescription: 'Everything i sbuild using special treatment',
})

const {
  data: {
    value: { projects },
  },
} = await useSanityQuery<{
  projects: Project[]
}>(projectQuery)

onMounted(() => {
  useAnimation()
})
</script>
