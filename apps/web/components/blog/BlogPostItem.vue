<template>
  <div
    class="flex flex-col col-span-2 row-span-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    :class="class"
    @click="openPost"
  >
    <div
      class="flex h-[320px] laptop:h-[480px] relative rounded-3xl overflow-hidden"
    >
      <!-- categories -->
      <div
        class="flex bg-white px-5 h-12 rounded-full gap-3 absolute right-5 top-5 justify-center items-center z-10"
      >
        <span class="h-2 w-2 rounded-full bg-black"></span>
        <span class="text-base font-medium">{{ data.tag }}</span>
      </div>

      <!-- release date -->
      <div
        class="flex justify-center items-center bg-white px-5 h-12 rounded-full gap-3 absolute text-gray-600 text-base left-5 bottom-5 z-10"
      >
        {{ parsedDate }}
      </div>

      <!-- thumbnail -->
      <NuxtImg
        :src="data.thumbnail"
        class="h-full w-full object-cover transition-all duration-1000 hover:scale-105"
      />
    </div>

    <h3
      class="text line-clamp-2 font-semibold mt-8 w-10/12 leading-snug"
      :class="size === 'large' ? 'text-3xl' : 'text-2xl'"
    >
      {{ data.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { BlogPost } from '~/types/content'

interface BlogPostItemProps {
  class?: string
  size?: 'medium' | 'large'
  data: BlogPost
}

const { size = 'medium', data } = defineProps<BlogPostItemProps>()
const parsedDate = computed(() => {
  return parseDateToRelative(new Date(data._createdAt))
})

const openPost = () => {
  navigateTo(`/blog/${data.slug}`)
}
</script>
