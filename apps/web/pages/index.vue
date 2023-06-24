<template>
  <main class="flex flex-col pt-40 py-32 laptop:py-60 gap-28 laptop:gap-80">
    <!-- intro -->
    <section class="flex flex-col container mx-auto laptop:px-20 intro px-5">
      <h2
        class="text-5xl laptop:text-7xl !leading-tight w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="laptop:pl-28">In search of quality.</span>
        <br />
        Designer & developer focused on how the thing work.
      </h2>
      <div
        class="flex flex-col laptop:flex-row text-xl leading-relaxed mt-24 gap-16"
      >
        <div class="flex laptop:w-1/2 flex-col gap-10">
          <p
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
          >
            Hello. I am Nyoman Sunima, a product designer and an developer based
            in Bali, Indonesia and currently iam working as freelancer. For the
            past 5+ years I have been focusing my work on product design and
            development. All of my day is used to design and crafting an
            interesting product.
          </p>
          <p
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
          >
            In my free time I love to doing something happy, farming, create a
            side hustle, create and share products, and selling.
          </p>
        </div>
        <div class="flex laptop:w-1/2 flex-col gap-10">
          <p
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
          >
            The truth is, I started my journey in my high school. As a tech
            anthusiast i love to blogging and start to theme and design the blog
            for my self. Being from an mobile developer in Bali. I start was
            introduced to the new world that interesting and challenging. Then
            start grew up into a design and fullstack developer.
          </p>
          <p
            data-cursor-size="40"
            data-cursor-icon="fi fi-sr-camera-viewfinder"
          >
            Now create a product is part of my execution and goals. Start with
            research and craft it into a working product.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center mt-28 gap-4 actions">
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
        class="text-5xl laptop:text-7xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="text-gray-400 laptop:pl-28">In creating project.</span>
        <br />
        I try my best to make a special and bring more value to products.
      </h2>
      <div class="flex actions mt-10">
        <OutlineButton link="/projects">
          See more <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div class="grid grid-cols-3 laptop:grid-cols-9 gap-6 mt-20 list">
        <ProjectItem v-for="item in projects" :key="item.slug" :data="item" />
      </div>
    </section>

    <!-- current activity -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 activity">
      <h2
        class="text-5xl laptop:text-7xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="laptop:pl-28">
          Now, something that i focused in
          <span class="text-gray-400">special one</span>.
        </span>
        <br />
        Build something that feel good.
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

    <!-- apps -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 activity">
      <h2
        class="text-5xl laptop:text-7xl text-center mx-auto !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-anim-slide-up
      >
        All solution should work.
        <br />
        Put every single <span class="text-gray-400">problem</span> into
        research and solve with elegant
        <span class="text-gray-400">solutions</span>.
      </h2>
      <div class="flex actions mt-10 justify-center" data-anim-slide-up>
        <OutlineButton link="/apps">
          See apps <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-1 laptop:grid-cols-4 gap-6 mt-20 list laptop:mt-96"
      >
        <AppItem
          v-for="item in apps"
          :key="item.title"
          :data="item"
          data-anim-sick-slide-up
        />
      </div>
    </section>

    <!-- products -->
    <section
      class="flex flex-col items-end container mx-auto px-5 laptop:px-20 activity"
    >
      <h2
        class="text-5xl laptop:text-7xl text-end mx-auto !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-anim-slide-up
      >
        Goodie products.
        <br />
        I craft something that may help you to move faster.
      </h2>
      <div class="flex actions mt-10 justify-center" data-anim-slide-up>
        <OutlineButton link="/shop">
          Explore products <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-1 laptop:grid-cols-4 gap-6 mt-20 list laptop:mt-96"
      >
        <ProductItem
          v-for="item in products"
          :key="item.slug"
          :data="item"
          data-anim-sick-slide-up=""
        />
      </div>
    </section>

    <!-- blog -->
    <section class="flex flex-col container mx-auto px-5 laptop:px-20 blog">
      <h2
        class="text-5xl laptop:text-7xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-anim-slide-up
      >
        <span class="laptop:pl-28">What i sharing.</span>
        <br />
        Is just about my <span class="text-gray-400"> experiences </span> that
        can help you.
      </h2>
      <div class="flex mt-10 actions" data-anim-slide-up>
        <OutlineButton link="/blog">
          Read More <i class="fi fi-rr-arrow-right"></i
        ></OutlineButton>
      </div>
      <div
        class="grid grid-cols-2 laptop:grid-cols-6 gap-6 mt-20 list laptop:mt-96"
      >
        <BlogPostItem
          v-for="post in posts"
          :key="post.slug"
          :data="post"
          data-anim-sick-slide-up
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { App, BlogPost, Product, Project } from '~/types/content'

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
    },
    "apps": *[_type == "app"] | order(_created desc){
      ...,
      "thumbnail": thumbnail.asset -> url,
    },
    "products": *[_type == "product"] | order(_createdAt desc){
      title,
      initialPrice,
      "thumbnail":images[0].asset->url,
      "slug": slug.current,
    }
  }
`

const {
  data: {
    value: { posts, stories, projects, apps, products },
  },
} = await useSanityQuery<{
  posts: BlogPost[]
  stories: {
    title: string
    url: string
  }[]
  projects: Project[]
  apps: App[]
  products: Product[]
}>(detailQuery)

// start the animation when finish load
onMounted(() => {
  useAnimation()

  gsap.from('section.intro h2', {
    opacity: 0,
    y: 300,
    duration: 1.2,
    scrollTrigger: {
      trigger: 'section.intro h2',
      scrub: true,
      end: '+=900',
    },
  })
  gsap.from('section.intro p', {
    opacity: 0,
    y: 200,
    duration: 1.8,
    stagger: 0.4,
    scrollTrigger: {
      trigger: 'section.intro h2',
      scrub: true,
      end: '+=800',
    },
  })
  gsap.from('section.intro .actions', {
    opacity: 0,
    y: 200,
    duration: 1.2,
    scrollTrigger: {
      trigger: 'section.intro .actions',
      scrub: true,
    },
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: 'section.projects',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .from('section.projects h2', {
      y: 5000,
      scale: 8,
      duration: 1.2,
    })
    .from('section.projects .actions', {
      y: 200,
      opacity: 0,
    })
    .from('section.projects .list', {
      y: 200,
      duration: 1.0,
    })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: 'section.activity',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .from('section.activity h2', {
      y: 200,
      opacity: 0,
      duration: 1.2,
    })
    .from('section.activity .list', {
      y: 200,
      opacity: 0,
      duration: 1.2,
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
})
</script>
