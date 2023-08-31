<template>
  <main class="flex flex-col pt-40 py-32 laptop:py-60 gap-28 laptop:gap-80">
    <section class="flex flex-col container mx-auto laptop:px-20 intro px-5">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-opacity"
      >
        <span class="laptop:pl-28"></span>
        In search of quality.
        <br />
        Designer & developer focused on how the thing work.
      </h2>
      <div
        class="flex flex-col laptop:flex-row text-xl leading-relaxed mt-24 gap-16"
      >
        <div class="flex laptop:w-1/2 flex-col gap-10">
          <div
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
            animation="slide-up"
          >
            <p animation-target>
              Hello. I am Nyoman Sunima, a product designer and an developer
              based in Bali, Indonesia and currently iam working as freelancer.
              For the past 5+ years I have been focusing my work on product
              design and development. All of my day is used to design and
              crafting an interesting product.
            </p>
          </div>
          <div
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
            animation="slide-up"
          >
            <p animation-target>
              In my free time I love to doing something happy, farming, create a
              side hustle, create and share free products.
            </p>
          </div>
        </div>
        <div class="flex laptop:w-1/2 flex-col gap-10">
          <div
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
            animation="slide-up"
          >
            <p animation-target>
              The truth is, I started my journey in my high school. As a tech
              anthusiast i love to blogging and start to theme and design the
              blog for my self. Being from an mobile developer in Bali. I start
              was introduced to the new world that interesting and challenging.
              Then start grew up into a designer and fullstack developer.
            </p>
          </div>
          <div
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
            animation="slide-up"
          >
            <p animation-target>
              Now create a product is part of my execution and goals. Start with
              research and craft it into a working product.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center mt-28 gap-4" animation="fade">
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

    <section
      class="flex flex-col container mx-auto px-5 laptop:px-20 projects"
      v-show="projects.length > 0"
    >
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        <span class="laptop:pl-28"></span>
        In creating project.
        <br />
        I try my best to make a special and bring more value to products.
      </h2>
      <div class="flex actions mt-10" animation="slide-up">
        <OutlineButton link="/projects">
          See more <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-3 laptop:grid-cols-9 gap-6 mt-20 list"
        animation="item-slide-up-scrub"
      >
        <ProjectItem
          v-for="item in projects"
          :key="item.slug"
          :data="item"
          animation-target
        />
      </div>
    </section>

    <section
      class="flex flex-col container mx-auto px-5 laptop:px-20 activity"
      v-show="apps.length > 0"
    >
      <h2
        class="text-5xl laptop:text-8xl mx-auto !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-char-slide-up"
      >
        All solution should work. Put every single problem into research and
        solve with elegant solutions.
      </h2>
      <div class="flex actions mt-10 justify-center" animation="slide-up">
        <OutlineButton link="/apps">
          See apps <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-1 laptop:grid-cols-4 gap-6 mt-20 list laptop:mt-36"
        animation="item-slide-up-scrub"
      >
        <AppItem
          v-for="item in apps"
          :key="item.title"
          :data="item"
          animation-target
        />
      </div>
    </section>

    <section
      class="flex flex-col items-end container mx-auto px-5 laptop:px-20 activity"
      v-show="products.length > 0"
    >
      <h2
        class="text-5xl laptop:text-8xl text-end mx-auto !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-line-mask-opacity-scrub"
      >
        Goodie products. I craft something that may help you to move faster.
      </h2>
      <div class="flex actions mt-10 justify-center" animation="slide-up">
        <OutlineButton link="/shop">
          Explore products <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-1 laptop:grid-cols-4 gap-6 mt-20 list laptop:mt-36"
        animation="item-slide-up-scrub"
      >
        <ProductItem
          v-for="item in products"
          :key="item.slug"
          :data="item"
          animation-target
        />
      </div>
    </section>

    <section
      class="flex flex-col container mx-auto px-5 laptop:px-20 blog"
      v-show="posts.length > 0"
    >
      <h2
        class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        animation="text-word-slide-up"
      >
        <span class="laptop:pl-28"></span>
        What I sharing. Is just about my experiences that can help you.
      </h2>
      <div class="flex mt-10 actions" animation="slide-up">
        <OutlineButton link="/blog">
          Read More <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
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
  </main>
</template>

<script setup lang="ts">
import { App, BlogPost, Product, Project } from '~/types/content'
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
    value: { posts, projects, apps, products },
  },
} = await useSanityQuery<{
  posts: BlogPost[]
  projects: Project[]
  apps: App[]
  products: Product[]
}>(homeQuery)

// start the animation when finish load
onMounted(() => {
  useAnimation()
})
</script>
