<template>
  <main class="flex flex-col pt-48 pb-80 gap-40 laptop:gap-80">
    <!-- about me -->
    <section
      class="flex flex-col laptop:flex-row container mx-auto gap-20 about-section px-5 laptop:px-20"
    >
      <div
        class="flex relative laptop:w-5/12 justify-center items-end overflow-hidden rounded-3xl profile"
      >
        <div class="flex absolute w-full">
          <NuxtImg
            src="/images/profile-cover.png"
            class="flex h-full w-full object-fill"
          />
        </div>
        <NuxtImg
          src="/images/photo.png"
          class="relative flex w-[400px] h-[400px] object-cover"
        />
      </div>

      <div class="flex flex-col laptop:w-7/12 gap-10 content">
        <h2 class="text-4xl laptop:text-6xl">
          About me in <span class="text-gray-400">10 seconds</span>
        </h2>
        <div class="flex flex-col gap-10 text-xl leading-relaxed">
          <p class="">
            Hi, My name Nyoman Sunima. Iam a Product Designer and Developer
            located in Bali, Indonesia. I work as software engineering and cratf
            the app from the zero and make something special. Everytime my day i
            use to write the content, sharing with community, craft app and
            connect with other creators.
          </p>
          <p class="">
            I really enjoy to code, the satisfied things is when implement the
            feature that work for other people. My dream is to craft and make
            software become more humaity and clean.
          </p>
        </div>
      </div>
    </section>

    <!-- status and story -->
    <section class="flex container mx-auto px-5 laptop:px-20 story">
      <div class="flex flex-col">
        <h2 class="text-4xl laptop:text-6xl laptop:w-7/12 leading-tight">
          This is what iam doing <span class="text-gray-400">currently</span>
        </h2>

        <div class="flex flex-wrap gap-5 mt-10 list">
          <OutlineButton v-for="story in stories" :link="story.url">{{
            story.title
          }}</OutlineButton>
        </div>
      </div>
    </section>

    <!-- timeline stories -->
    <section
      class="flex flex-col laptop:flex-row container mx-auto px-5 laptop:px-20 gap-20 timeline"
    >
      <div class="flex flex-col laptop:w-7/12 left">
        <h2 class="text-4xl laptop:text-6xl leading-tight">
          See what's happening in <span class="text-gray-400">my journey</span>
        </h2>
        <p class="text-xl leading-relaxed mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptate praesentium fugit ut temporibus nam dignissimos quam!
          Mollitia, quisquam voluptas!
        </p>
      </div>

      <div
        class="flex flex-col laptop:w-5/12 gap-4 laptop:gap-10 right mt-[200px] laptop:mt-0"
      >
        <div
          class="flex flex-col gap-3 border border-gray-100 dark:border-gray-800 p-5 rounded-3xl"
          v-for="timeline in timelines"
          :key="timeline.title"
        >
          <h4 class="text-xl">{{ timeline.title }}</h4>
          <span class="text-lg line-clamp-2 dark:text-gray-300">{{
            timeline.desc
          }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AboutDetail } from '~/types/content'

definePageMeta({
  layout: 'main',
})
useSeoMeta({
  title: 'About',
  description: 'Know more about me and what i did',
  ogTitle: 'About',
  ogDescription: 'Know more about me and what i did',
})

const dataQuery = `
{
  "stories": *[_type == "story"] | order(_updatedAt desc) [0...5]{
    ...
  },
  "timelines": *[_type == "timeline"] | order(_updatedAt desc){
    ...
  }
}
`

const {
  data: {
    value: { stories, timelines },
  },
} = await useSanityQuery<AboutDetail>(dataQuery)

// animate the elements
onMounted(() => {
  gsap.from('.about-section .profile', {
    y: 200,
    opacity: 0,
    ease: 'expo',
    duration: 1.2,
    scrollTrigger: '.about-section',
  })
  gsap.from('.about-section .content h2', {
    y: 200,
    opacity: 0,
    delay: 0.2,
    scrollTrigger: '.about-section',
  })
  gsap.from('.about-section .content p', {
    y: 200,
    opacity: 0,
    delay: 0.3,
    scrollTrigger: '.about-section',
  })

  gsap.from('section.story h2', {
    y: 200,
    opacity: 0,
    duration: 1.2,
    ease: 'expo',
    scrollTrigger: {
      trigger: 'section.story',
      start: 'top center',
    },
  })
  gsap.from('section.story .list button', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'back',
    delay: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      trigger: 'section.story',
      start: 'top center',
    },
  })

  gsap.from('section.timeline .left h2', {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: 'power2',
    scrollTrigger: {
      trigger: 'section.timeline',
      start: 'top 75%',
    },
  })
  gsap.from('section.timeline .left p', {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power2',
    scrollTrigger: {
      trigger: 'section.timeline',
      start: 'top 75%',
    },
  })

  ScrollTrigger.create({
    trigger: 'section.timeline',
    start: 'top 30%',
    end:
      '+=' +
      ((document.querySelector('section.timeline .right') as HTMLElement)
        .clientHeight -
        500),
    pin: 'section.timeline .left',
    pinType: 'transform',
  })
})
</script>
