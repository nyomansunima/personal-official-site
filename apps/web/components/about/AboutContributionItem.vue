<template>
  <NuxtLink
    class="flex flex-col border border-gray-100 rounded-2xl py-14 px-5 col-span-3 row-span-6 items-center cursor-pointer"
    data-cursor-size="80"
    data-cursor-icon="fi fi-sr-mug-hot-alt"
    :to="data.url"
  >
    <picture class="h-20 w-20 rounded-full overflow-hidden flex">
      <NuxtImg :src="data.image" class="flex h-full w-full" />
    </picture>
    <h4 class="text-xl mt-10">{{ data.title }}</h4>
    <p class="text-lg text-center mt-2">{{ data.desc }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
interface AboutContributionItemProps {
  data: {
    image: string
    url: string
    desc: string
    title: string
  }
}

defineProps<AboutContributionItemProps>()
</script>
