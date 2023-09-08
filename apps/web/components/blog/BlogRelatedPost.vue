<template>
  <div
    class="flex flex-col container mx-auto px-5 laptop:px-10 mt-20 laptop:mt-80"
  >
    <h3 class="text-4xl font-semibold">Related posts</h3>
    <div class="grid tablet:grid-cols-2 laptop:grid-cols-6 mt-10 gap-6">
      <BlogPostItem v-for="post in data" :key="post.slug" :data="post" />
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
