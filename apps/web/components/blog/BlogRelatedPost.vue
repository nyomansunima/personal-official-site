<template>
  <div class="flex flex-col container mx-auto px-24 mt-80">
    <h3 class="text-4xl font-semibold">Related posts</h3>
    <div class="grid grid-cols-6 mt-10">
      <BlogPostItem :data="post" v-for="post in data" :key="post.slug" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPost } from '~/types/content'

interface BlogRelatedPostProps {
  data: BlogPost[]
}
defineProps<BlogRelatedPostProps>()
</script>
