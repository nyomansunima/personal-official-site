<script setup lang="ts">
import { featuredProjectsListQuery } from '~/lib/queries'
import { Project } from '~/types/content'
const {
  data: { value: projects },
} = await useSanityQuery<Project[]>(featuredProjectsListQuery)
</script>

<template>
  <section
    v-show="projects.length > 0"
    class="flex flex-col container mx-auto px-5 laptop:px-20 projects"
  >
    <h2
      class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
      data-cursor-size="200"
      data-cursor-exclusion
      animation="text-line-mask-opacity-scrub"
    >
      <span class="laptop:pl-20"></span>
      In crafting products.
      <br />
      I want to ensure my ability to provide more value.
    </h2>

    <div class="flex flex-col mt-24 gap-20">
      <ProjectItem
        v-for="(item, i) in projects"
        :key="item.slug"
        :data="item"
        :position="i"
      />
    </div>

    <div class="flex justify-center mt-56">
      <Button as="a" href="/projects" size="lg" variant="primary">
        More projects <i class="fi fi-sr-gamepad" />
      </Button>
    </div>
  </section>
</template>
