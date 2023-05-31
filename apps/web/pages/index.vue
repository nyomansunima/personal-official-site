<template>
  <main class="flex flex-col pt-40 py-80">
    <section class="flex flex-col container mx-auto px-20 items-center">
      <h2 class="text-6xl leading-tight text-center w-8/12">
        🎉 Hello, iam a
        <span class="text-gray-400"
          >Product Designer, Developer & Indie maker</span
        >
      </h2>
      <p class="text-xl leading-relaxed text-center w-7/12 mt-10">
        Hi, My name Nyoman Sunima. Iam a Product Designer and Developer located
        in Bali, Indonesia. I work as software engineering and cratf the app
        from the zero and make something special. Everytime my day i use to
        write the content, sharing with community, craft app and connect with
        other creators.
      </p>

      <div class="flex flex-wrap mt-12 gap-4">
        <OutlineButton link="/blog">My Blog</OutlineButton>
        <OutlineButton link="/project">Projects</OutlineButton>
        <OutlineButton link="/inspiration">Inspirations</OutlineButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Product Designer, Developer & Indie Maker',
  description:
    'Hi, iam a product designer and developer located in bali, Iam indie maker',
  ogTitle: 'Product Designer, Developer & Indie Maker',
  ogDescription:
    'Hi, iam a product designer and developer located in bali, Iam indie maker',
})
</script>
