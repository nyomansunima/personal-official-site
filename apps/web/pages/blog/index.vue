<template>
  <main class="flex flex-col min-h-screen pt-40 text-xl pb-80">
    <!-- Featured posts -->
    <section class="container mx-auto flex flex-col px-5 laptop:px-10">
      <h3 class="flex text-3xl font-semibold">🎉 Featured</h3>
      <div
        class="flex flex-col laptop:grid laptop:grid-cols-6 mt-10 w-full gap-6"
      >
        <BlogPostItem
          :size="index == 0 ? 'large' : 'medium'"
          v-for="(post, index) in featuredPost.data.value"
          :data="post"
          :key="post.slug"
        />
      </div>
    </section>

    <!-- Latest post -->
    <section
      class="container mx-auto px-5 laptop:px-10 flex flex-col laptop:mt-60 mt-28"
    >
      <!-- filter -->
      <div class="flex flex-col">
        <h4 class="text-2xl font-semibold">Search blog posts</h4>
        <div class="flex laptop:w-4/12 mt-10">
          <TextInput
            placeholder="search blog posts ..."
            name="search"
            suf-icon="fi fi-rr-search"
          />
        </div>
        <div class="flex flex-wrap gap-3 mt-6 laptop:w-8/12">
          <BlogFilterTagItem :tag="tag" v-for="tag in tags" :key="tag" />
        </div>
      </div>

      <!-- articles -->
      <div
        class="flex flex-col laptop:grid laptop:grid-cols-6 gap-x-8 gap-y-16 mt-28 grid-flow-row"
      >
        <BlogPostItem
          v-for="(post, index) in posts.data.value"
          :key="index"
          :class="
            index === 1 ? 'row-start-2' : index === 2 ? 'row-start-3' : ''
          "
          :data="post"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { tags } from '~/contents/blog.json'
import { BlogPost } from '~/types/content'

const featuredQuery = `
  *[_type == "blog" && featured == true][0...2]{
    "slug": slug.current,
    title,
    "thumbnail": thumbnail.asset -> url,
    "tag": tags[0],
    _createdAt,
    featured,
    "isIncoming": "Incoming" in tags[],
  }
`
const postQuery = `
  *[_type == "blog"] | order(_updatedAt desc){
    "slug": slug.current,
    title,
    "thumbnail": thumbnail.asset -> url,
    "tag": tags[0],
    _createdAt,
    featured,
    "isIncoming": "Incoming" in tags[],
  }
`
const featuredPost = await useSanityQuery<BlogPost[]>(featuredQuery)
const posts = await useSanityQuery<BlogPost[]>(postQuery)

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
