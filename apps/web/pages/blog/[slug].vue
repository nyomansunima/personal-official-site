<template>
  <main class="flex flex-col laptop:py-60 laptop:pb-80 py-28 pb-28">
    <!-- top action including back, share and other -->
    <div class="container mx-auto px-5">
      <div class="flex laptop:w-7/12 mx-auto">
        <TextButton
          @click="navigateTo('/blog')"
          class="transition-all duration-500 hover:-translate-x-1"
          ><i
            class="fi fi-rr-arrow-left text-2xl h-12 w-12 rounded-full bg-black text-white dark:bg-white dark:text-black"
          ></i>
          Back to overview</TextButton
        >
      </div>
    </div>

    <!-- content articles -->
    <div class="flex flex-col container mx-auto mt-20">
      <article
        class="flex w-full flex-col px-5 laptop:w-7/12 mx-auto border-b border-gray-100 dark:border-b-gray-800 pb-10"
      >
        <!-- title -->
        <h1 class="text-5xl font-medium leading-tight">
          {{ post.title }}
        </h1>
        <!-- release date -->
        <span class="text-gray-500 text-lg mt-3">{{ parsedReleaseDate }}</span>
        <picture
          class="flex relative overflow-hidden w-full h-[400px] rounded-3xl mt-10"
        >
          <NuxtImg :src="post.thumbnail" class="flex w-full object-cover" />
        </picture>

        <!-- tags -->
        <div class="flex flex-wrap gap-x-3 gap-y-3 mt-10">
          <BlogTag v-for="tag in post.tags" :key="tag" :tag="tag" />
        </div>

        <!-- content -->
        <MarkdownContent :data="post.content" />
      </article>

      <!-- the article author -->
      <BlogPostAuthor />

      <!-- newsletter -->
      <BlogNewsletter />
    </div>

    <!-- Related posts -->
    <BlogRelatedPost :data="related" v-show="related.length > 0" />
  </main>
</template>

<script setup lang="ts">
import { blogDetailQuery } from '~/lib/queries'
import { BlogDetail } from '~/types/content'

definePageMeta({
  layout: 'blog',
})

const route = useRoute()
const {
  public: { host },
} = useRuntimeConfig()

// fetching the post including with
// related posts
const {
  data: {
    value: { post, related },
  },
} = await useSanityQuery<BlogDetail>(blogDetailQuery, {
  slug: route.params.slug,
})

// parse the date into readable string
const parsedReleaseDate = computed(() =>
  parseDateToRelative(new Date(post._createdAt)),
)

useSeoMeta({
  title: post.title,
  description: post.desc.substring(0, 100),
  ogTitle: post.title,
  ogDescription: post.desc.substring(0, 100),
  ogUrl: `${host}/blog/${route.params.slug}`,
  ogImage: post.thumbnail,
  ogType: 'article',
  twitterTitle: post.title,
  twitterDescription: post.desc.substring(0, 100),
  twitterImage: post.thumbnail,
})
useHead({
  link: [
    {
      rel: 'canonical',
      href: post.canonical || `${host}/blog/${route.params.slug}`,
    },
  ],
})
</script>
