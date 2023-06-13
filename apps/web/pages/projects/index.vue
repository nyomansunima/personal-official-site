<template>
  <main class="flex flex-col laptop:py-60 py-32 gap-28 laptop:gap-80">
    <section class="flex container mx-auto laptop:px-20 intro">
      <h2
        class="text-6xl leading-relaxed laptop:w-6/12 text-center mx-auto"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        Because
        <span
          class="bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full"
          >perfection</span
        >
        never be ending
      </h2>
    </section>

    <section class="flex container mx-auto px-5 laptop:px-20 projects">
      <div
        class="grid grid-cols-3 tablet:grid-cols-6 laptop:grid-cols-9 gap-x-6 gap-y-16"
      >
        <ProjectItem v-for="item in projects" :key="item.slug" :data="item" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
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

const query = `
  {
    "projects": *[_type == "project"]{
      ...,
      "thumbnail": thumbnail.asset -> url,
      "slug": slug.current,
      "tag": tags[0]
    }
  }
`
const {
  data: {
    value: { projects },
  },
} = await useSanityQuery<{
  projects: Project[]
}>(query)

onMounted(() => {
  gsap.from('section.intro h2', {
    y: 200,
    opacity: 0,
    duration: 1.2,
  })

  gsap.from('section.projects', {
    y: 200,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: 'section.projects',
  })
})
</script>
