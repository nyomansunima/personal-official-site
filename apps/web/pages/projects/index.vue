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
</script>

<template>
  <main class="flex flex-col laptop:py-60 py-32 gap-28 laptop:gap-80">
    <!-- intro -->
    <section class="flex container mx-auto laptop:px-20">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        Because too perfect is a mistake. Just make it run in incredible way.
      </h2>
    </section>

    <!-- list of projects -->
    <section
      class="flex flex-col gap-40 container mx-auto px-5 laptop:px-20 laptop:pb-60"
    >
      <!-- filter of project -->
      <div class="flex items-center flex-wrap gap-4">
        <Button size="lg" variant="primary">
          <i class="fi fi-rr-badge" />
          Works
        </Button>

        <Button size="lg">
          <i class="fi fi-rr-gamepad" />
          Play
        </Button>
      </div>

      <div class="flex flex-col gap-y-16" animation="item-slide-up-scrub">
        <ProjectItem
          v-for="(item, i) in projects"
          :key="item.slug"
          :data="item"
          :position="i"
          animation-target
        />
      </div>
    </section>
  </main>
</template>
