<template>
  <main class="flex flex-col min-h-screen pt-40 text-xl pb-80">
    <!-- Featured posts -->
    <section class="container mx-auto flex flex-col px-5 laptop:px-20">
      <h3 class="flex text-3xl">🎉 Featured</h3>
      <div
        class="flex flex-col laptop:grid laptop:grid-cols-6 mt-10 w-full gap-6"
      >
        <BlogPostItem
          v-for="(post, index) in featured"
          :key="post.slug"
          :size="index == 0 ? 'large' : 'medium'"
          :data="post"
        />
      </div>
    </section>

    <!-- series post -->
    <section class="container mx-auto px-5 laptop:px-20 mt-60">
      <h3 class="text-3xl">🏀 Top Series</h3>
      <div class="grid grid-cols-1 laptop:grid-cols-3 mt-16 w-full">
        <SeriesItem v-for="(item, i) in series" :key="i" :data="item" />
      </div>
    </section>

    <!-- Latest post -->
    <section
      class="container mx-auto px-5 laptop:px-10 flex flex-col laptop:mt-60 mt-28"
    >
      <!-- filter -->
      <div class="flex flex-col">
        <h4 class="text-2xl">Search blog posts</h4>
        <div class="flex laptop:w-4/12 mt-10">
          <TextInput
            placeholder="search blog posts ..."
            name="search"
            suf-icon="fi fi-rr-search"
          />
        </div>
        <div class="flex flex-wrap gap-3 mt-6 laptop:w-8/12">
          <BlogFilterTagItem v-for="tag in tags" :key="tag" :tag="tag" />
        </div>
      </div>

      <!-- articles -->
      <div
        class="flex flex-col laptop:grid laptop:grid-cols-6 gap-x-8 gap-y-16 mt-28 grid-flow-row"
        animation="item-slide-up-scrub"
      >
        <BlogPostItem
          v-for="(post, index) in latest"
          :key="index"
          :data="post"
          animation-target
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { tags } from '~/assets/data/blog.json'
import { blogQuery } from '~/lib/queries'
import { BlogPost, BlogSeries } from '~/types/content'

const {
  data: {
    value: { featured, latest, series },
  },
} = await useSanityQuery<{
  featured: BlogPost[]
  latest: BlogPost[]
  series: BlogSeries[]
}>(blogQuery)

useSeoMeta({
  title: 'Blog',
  description: 'Explore the right content',
  ogType: 'article',
  ogTitle: 'Blog',
  ogDescription: 'Explore the right content',
})

definePageMeta({
  layout: 'blog',
})
</script>
