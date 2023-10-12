<script setup lang="ts">
import { featuredPostListQuery } from '~/lib/queries'
const {
  data: { value: posts },
} = await useSanityQuery<any[]>(featuredPostListQuery)
</script>

<template>
  <section
    v-show="posts.length > 0"
    class="flex flex-col container mx-auto px-5 laptop:px-20 blog"
  >
    <h2
      class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
      data-cursor-size="200"
      data-cursor-exclusion
      animation="text-word-slide-up"
    >
      I share my experience and educate other people.
    </h2>

    <div class="flex mt-16 actions" animation="slide-up">
      <Button as="a" href="/blog" variant="primary" size="lg">
        Learn from blog <i class="fi fi-rr-arrow-right"></i
      ></Button>
    </div>

    <div
      class="grid grid-cols-2 laptop:grid-cols-6 gap-6 mt-20 list laptop:mt-36"
      animation="item-slide-up-scrub"
    >
      <BlogPostItem
        v-for="post in posts"
        :key="post.slug"
        :data="post"
        animation-target
      />
    </div>
  </section>
</template>
