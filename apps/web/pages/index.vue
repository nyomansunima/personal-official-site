<template>
  <main class="flex flex-col pt-40 py-32 laptop:py-60 gap-28 laptop:gap-80">
    <section
      class="flex flex-col container mx-auto laptop:px-20 items-center intro"
    >
      <h2
        class="text-5xl laptop:text-6xl !leading-relaxed text-center laptop:w-8/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        🎉 Hello, iam a Product
        <span
          class="px-6 py-4 border-4 border-black dark:border-white rounded-full"
          >Designer</span
        >,
        <span
          class="px-7 py-5 bg-black dark:bg-white rounded-full text-white dark:text-black"
          >Developer</span
        >
        & Indie maker
      </h2>
      <p class="text-xl leading-relaxed text-center laptop:w-7/12 mt-10">
        Hi, My name Nyoman Sunima. Iam a Product Designer and Developer located
        in Bali, Indonesia. I work as software engineering and cratf the app
        from the zero and make something special. Everytime my day i use to
        write the content, sharing with community, craft app and connect with
        other creators.
      </p>

      <div class="flex flex-wrap mt-12 gap-4 actions">
        <OutlineButton link="/blog"
          ><i class="fi fi-sr-heart"></i> My Blog</OutlineButton
        >
        <OutlineButton link="/projects"
          ><i class="fi fi-sr-play"></i> Projects</OutlineButton
        >
        <OutlineButton link="/about"
          ><i class="fi fi-sr-badge"></i> About me</OutlineButton
        >
      </div>
    </section>

    <!-- projects -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 projects">
      <h2
        class="text-5xl laptop:text-6xl leading-tight laptop:w-6/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        Here some project that <span class="text-gray-400"> works </span>
      </h2>
      <div class="grid grid-cols-3 laptop:grid-cols-9 gap-6 mt-20 list">
        <ProjectItem v-for="item in projects" :key="item.slug" :data="item" />
      </div>

      <div class="flex justify-center mt-32 actions">
        <OutlineButton link="/projects">
          Read More <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
    </section>

    <!-- current activity -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 activity">
      <h2
        class="text-5xl laptop:text-6xl leading-tight laptop:w-6/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        Now in
        <span class="text-gray-400"> progress </span>
        on my hand
      </h2>
      <div class="flex mt-20 gap-5 flex-wrap list">
        <OutlineButton
          v-for="{ title, url } in stories"
          :key="title"
          :link="url"
          data-cursor-size="50"
          data-cursor-exclusion
          >{{ title }}</OutlineButton
        >
      </div>
    </section>

    <!-- blog -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 blog">
      <h2
        class="text-5xl laptop:text-6xl leading-tight laptop:w-6/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        I sharing the things in <span class="text-gray-400"> community </span>
      </h2>
      <div class="grid grid-cols-2 laptop:grid-cols-6 gap-6 mt-20 list">
        <BlogPostItem v-for="post in posts" :key="post.slug" :data="post" />
      </div>

      <div class="flex justify-center mt-32 actions">
        <OutlineButton link="/blog">
          Read More <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { BlogPost, Project } from '~/types/content'

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

const detailQuery = `
  {
    "posts": *[_type == "blog"] | order(_updatedAt desc)[0...3]{
      "slug": slug.current,
      title,
      "thumbnail": thumbnail.asset -> url,
      "tag": tags[0],
      _createdAt,
      featured,
      "isIncoming": "Incoming" in tags[],
    },
    "stories": *[_type == "story"] | order(_updatedAt desc) [0...5]{
       ...
    },
    "projects": *[_type == "project"] | order(_updatedAt desc) [0...3]{
      ...,
      "thumbnail": thumbnail.asset -> url,
      "slug": slug.current,
      "tag": tags[0]
    }
  }
`

const {
  data: {
    value: { posts, stories, projects },
  },
} = await useSanityQuery<{
  posts: BlogPost[]
  stories: {
    title: string
    url: string
  }[]
  projects: Project[]
}>(detailQuery)

// start the animation when finish load
onMounted(() => {
  gsap
    .timeline({})
    .from('section.intro h2', {
      opacity: 0,
      scale: 8,
      duration: 1.2,
    })
    .from('section.intro p', {
      opacity: 0,
      y: 200,
      duration: 1.2,
      ease: 'back',
    })
    .from('section.intro .actions', {
      opacity: 0,
      y: 200,
      duration: 1.2,
      ease: 'back',
    })

  gsap
    .timeline({
      defaults: {
        duration: 1.2,
      },
      scrollTrigger: 'section.activity',
    })
    .from('section.activity h2', {
      y: 200,
      opacity: 0,
    })
    .from('section.activity .list', {
      y: 200,
      opacity: 0,
    })

  gsap
    .timeline({
      defaults: {
        duration: 1.2,
        ease: 'back',
      },
      scrollTrigger: 'section.blog',
    })
    .from('section.blog h2', {
      y: 200,
      opacity: 0,
    })
    .from('section.blog .list', {
      y: 200,
      opacity: 0,
    })
    .from('section.blog .actions', {
      y: 200,
      opacity: 0,
    })

  gsap
    .timeline({
      defaults: {
        duration: 1.2,
        ease: 'back',
      },
      scrollTrigger: 'section.projects',
    })
    .from('section.projects h2', {
      y: 200,
      opacity: 0,
    })
    .from('section.projects .list', {
      y: 200,
      opacity: 0,
    })
    .from('section.projects .actions', {
      y: 200,
      opacity: 0,
    })
})
</script>
