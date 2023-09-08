<template>
  <main class="flex flex-col py-40">
    <section
      class="flex flex-col laptop:flex-row container mx-auto px-5 laptop:px-20 gap-10"
    >
      <div
        class="flex flex-col laptop:w-1/2 h-[250px] laptop:h-[600px] overflow-hidden rounded-3xl"
      >
        <NuxtImg
          :src="detail.thumbnail"
          :alt="detail.title"
          class="h-full w-full object-cover transition-all duration-700 hover:scale-105"
        />
      </div>
      <div class="flex flex-col laptop:w-1/2 laptop:pt-10">
        <div class="flex">
          <NuxtLink
            href="/blog"
            class="transition-all duration-500 hover:-translate-x-1"
            ><i
              class="fi fi-rr-arrow-left text-2xl h-12 w-12 rounded-full bg-black text-white dark:bg-white dark:text-black"
            ></i>
            Back to blog</NuxtLink
          >
        </div>
        <h2 class="text-4xl laptop:text-5xl !leading-tight mt-10">
          {{ detail.title }}
        </h2>
        <div class="flex flex-wrap mt-5">
          <span
            class="border border-neutral-100 dark:border-neutral-800 px-5 py-3 rounded-full relative"
          >
            <span
              class="h-2 w-2 rounded-full bg-red-500 absolute top-1 right-1"
            ></span>
            {{ detail.totalContent > 0 ? detail.totalContent : 'No' }}
            Articles</span
          >
        </div>
        <p class="text-xl leading-relaxed mt-10">{{ detail.desc }}</p>
      </div>
    </section>

    <section
      class="flex container mx-auto px-5 laptop:px-20 mt-20 laptop:mt-40"
    >
      <div class="grid grid-cols-1 laptop:grid-cols-2 w-full gap-10">
        <BlogSeriesItem
          v-for="(post, i) in contents"
          :key="i"
          :data="post"
          :position="i + 1"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { BlogSeriesDetail } from '~/types/content'
import { loadSeriesDetail } from '~/lib/queries'

definePageMeta({
  layout: 'blog',
})

const route = useRoute()
const {
  data: {
    value: { detail, contents },
  },
} = await useSanityQuery<BlogSeriesDetail>(loadSeriesDetail, {
  slug: route.params.slug,
})

useSeoMeta({
  title: detail.title,
  description: detail.desc.substring(0, 40),
})
</script>
