<template>
  <div class="flex flex-col">
    <NuxtLink
      :to="`/shop/${data.slug}`"
      class="flex flex-col transition-all duration-1000 hover:scale-105 hover:-translate-y-4"
    >
      <picture
        class="flex overflow-hidden rounded-3xl min-h-[300px] relative"
        data-cursor-size="20"
      >
        <NuxtImg
          :src="data.thumbnail"
          class="h-full w-full object-cover transition-all duration-1000 hover:scale-105"
        />

        <span
          class="bg-white px-4 py-2 text-lg rounded-full absolute bottom-4 right-4 text-black"
          >${{ data.initialPrice }}</span
        >
      </picture>
      <h3 class="line-clamp-2 text-lg mt-5 px-3 !leading-tight">
        {{ data.title }}
      </h3>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/types/content'

interface ProductItemProps {
  data: Product
}
defineProps<ProductItemProps>()
</script>
