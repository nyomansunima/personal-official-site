<script setup lang="ts">
import { App, BlogPost, Product, Project, Story } from '~/types/content'
import { homeQuery } from '~/lib/queries'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Product Designer, Fullstack Developer',
  description:
    'Hi, iam a product designer and fullstack developer located in Bali, Indonesia',
  ogTitle: 'Product Designer, Fullstack Developer',
  ogDescription:
    'Hi, iam a product designer and fullstack developer located in Bali, Indonesia',
})

const {
  data: {
    value: { posts, projects, stories },
  },
} = await useSanityQuery<{
  posts: BlogPost[]
  projects: Project[]
  stories: Story[]
}>(homeQuery)
</script>

<template>
  <main class="flex flex-col pt-40 py-32 laptop:py-60 gap-28 laptop:gap-80">
    <!-- intro -->
    <section class="flex flex-col container mx-auto laptop:px-20 intro px-5">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        <span class="laptop:pl-20"></span>
        In search of quality.
        <br />
        Designer and developer focused on how the thing worked.
      </h2>

      <div class="flex flex-col mt-24">
        <div class="flex flex-col gap-10 text-xl leading-relaxed laptop:w-8/12">
          <p>
            5+ years as a product designer and full stack developer. Been
            focusing on crafting apps through research, design, and development.
            My day to day revolves around designing and developing digital
            products. I've been passionate about this work from the start,
            combining style with functionality to create user-friendly
            experiences.
          </p>
        </div>
      </div>

      <div class="flex items-center flex-wrap gap-5 mt-16">
        <Button
          v-for="(story, i) in stories"
          :key="i"
          size="lg"
          as="a"
          :href="story.url"
          target="_blank"
          external
          data-cursor-size="40"
          data-cursor-stick
          data-cursor-exclusion
        >
          {{ story.title }}
        </Button>

        <Button
          as="a"
          href="/about"
          size="lg"
          variant="primary"
          data-cursor-size="40"
          data-cursor-stick
          data-cursor-exclusion
        >
          Read more about me <i class="fi fi-rr-video-camera" />
        </Button>
      </div>
    </section>

    <!-- projects -->
    <section
      v-show="projects.length > 0"
      class="flex flex-col container mx-auto px-5 laptop:px-20 projects"
    >
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        <span class="laptop:pl-20"></span>
        In crafting products.
        <br />
        I want to ensure my ability to provide more value.
      </h2>

      <div class="flex flex-col mt-24 gap-20">
        <ProjectItem
          v-for="(item, i) in projects"
          :key="item.slug"
          :data="item"
          :position="i"
        />
      </div>

      <div class="flex justify-center mt-56">
        <Button as="a" href="/projects" size="lg" variant="primary">
          More projects <i class="fi fi-rr-gamepad" />
        </Button>
      </div>
    </section>

    <!-- blog -->
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

    <!-- contact -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 projects">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12 mx-auto text-center"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-slide-up"
      >
        Let’s make your idea become reality. We can discuss anything.
      </h2>

      <div class="flex justify-center m-auto mt-24">
        <Button as="a" href="/contact" variant="primary" size="lg">
          Get in touch <i class="fi fi-rr-heart" />
        </Button>
      </div>
    </section>
  </main>
</template>
