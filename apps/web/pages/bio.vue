<template>
  <main
    class="flex container mx-auto py-16 px-5 tablet:px-0 tablet:py-32 justify-center dark:text-black"
  >
    <div class="flex flex-col tablet:w-6/12">
      <!-- intro profile -->
      <!-- including avatar, bio, desc, and links -->
      <div class="flex flex-col w-full items-center">
        <div
          class="flex h-28 w-28 rounded-full relative overflow-hidden before:content-[''] before:absolute p-3 before:inset-0 before:border-2 before:border-gray-200 dark:before:border-gray-800 before:rounded-full"
        >
          <NuxtImg :src="content.avatar" class="rounded-full overflow-hidden" />
        </div>
        <div class="flex items-center gap-3 mt-4">
          <h2 class="text-2xl font-medium dark:text-white">Nyoman Sunima</h2>
          <i class="fi fi-rr-badge-check text-violet-500 text-2xl"></i>
        </div>
        <p class="flex w-11/12 text-center text-lg mt-4 dark:text-gray-200">
          {{ content.desc }}
        </p>
      </div>

      <!-- socials icons -->
      <div
        class="flex items-center gap-4 justify-center mt-10"
        v-if="content.socials.length > 0"
      >
        <template v-for="social in content.socials">
          <NuxtLink
            :to="social.url"
            external
            target="_blank"
            class="flex justify-center items-center h-14 w-14 shadow-sm rounded-full bg-white transition-all duration-300 hover:-translate-y-1"
          >
            <i class="text-xl" :class="social.iconCode"></i>
          </NuxtLink>
        </template>
      </div>

      <!-- special buttons -->
      <div
        class="flex flex-wrap items-center gap-4 justify-center mt-6 via-violet-50"
        v-show="content.links.length > 0"
      >
        <template v-for="link in content.links">
          <NuxtLink
            :to="link.url"
            external
            target="_blank"
            class="flex px-6 py-4 rounded-3xl bg-white font-medium gap-3 justify-center items-center transition-all duration-700 hover:scale-95"
            :style="{
              background: link.customColor,
              color: link.customColor && 'white',
            }"
          >
            <i
              class="text-xl"
              :class="link.iconCode"
              v-show="link.iconCode"
            ></i>
            {{ link.label }}
          </NuxtLink>
        </template>
      </div>

      <!-- summary info -->
      <div class="flex flex-col tablet:grid tablet:grid-cols-4 gap-5 mt-10">
        <!-- total follower social media -->
        <div
          class="flex flex-col items-start bg-emerald-300 p-5 rounded-4xl col-span-2 row-span-5 total-follower relative bg-[url('/images/pattern/circle.svg')] bg-right-top bg-no-repeat transition-all duration-7 00 hover:-translate-y-2"
        >
          <i class="fi fi-rr-following text-5xl"></i>
          <h4 class="flex uppercase text-6xl font-bold mt-6">
            {{ content.stats.totalFollower }}
          </h4>
          <span class="flex text-lg font-medium">Follower accros media</span>
          <p class="flex mt-4">
            Measured for facebook, instagram, twitter, linkedin, and dribbble.
          </p>

          <span class="flex mt-10">Last updated on May 2023</span>
        </div>

        <!-- total subscriber -->
        <div
          class="flex flex-col items-start bg-slate-50 p-5 rounded-4xl col-span-2 row-span-1 bg-[url('/images/pattern/poly.svg')] bg-right-top bg-no-repeat bg-cover transition-all duration-700 hover:-translate-y-2"
        >
          <div class="flex justify-between items-center w-full">
            <h4 class="flex text-2xl font-medium">
              {{ content.stats.totalSubscriber }}+
            </h4>
            <i class="fi fi-rr-envelope-dot text-2xl text-gray-500"></i>
          </div>
          <p class="flex mt-2">My monthly newsletter feed subscriber</p>
        </div>

        <!-- contact for influencer -->
        <div
          class="flex flex-col items-start bg-red-200 p-5 rounded-4xl col-span-2 row-span-4 transition-all duration-700 hover:-translate-y-2"
        >
          <div class="flex justify-between items-center w-full">
            <h4 class="flex text-lg font-medium">Need an influencer?</h4>
          </div>
          <p class="flex mt-2">
            I provider exclusive influencer and business model
          </p>

          <NuxtLink
            to="http://nyomansunima.com/contact"
            class="flex items-center gap-3 font-medium mt-6"
            external
          >
            <i class="fi fi-br-paper-plane"></i>
            Send me a message</NuxtLink
          >
        </div>

        <!-- Book any meetings -->
        <div
          class="flex flex-col bg-black dark:bg-slate-900 p-6 rounded-[32px] col-span-4 row-span-2 text-white transition-all duration-700 hover:-translate-y-2"
        >
          <div class="flex items-center gap-10">
            <div class="flex flex-col flex-1">
              <h4 class="text-xl font-medium leading-none">
                Partner chat with me
              </h4>
              <span class="flex mt-4 text-slate-200"
                >if you have something important to discuss and want to
                collaborate together, Please book my calendar to meet</span
              >
            </div>
            <NuxtLink
              to="https://calendly.com/nyomansunima/meetings"
              external
              target="_blank"
              class="flex h-14 w-14 rounded-full border border-gray-700 justify-center items-center transition-all duration-300 hover:scale-95"
            >
              <i class="fi fi-sr-calendar text-xl text-emerald-500"></i>
            </NuxtLink>
          </div>

          <div class="flex items-center gap-4 mt-6">
            <div class="flex gap-2">
              <i class="fi fi-rr-clock text-xl"></i>
              <span class="font-medium">30 minutes</span>
            </div>

            <div class="flex gap-2">
              <i class="fi fi-rr-video-camera-alt text-xl"></i>
              <span class="font-medium">Google meets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { BioContent } from '~/types/content'
const query = `
  *[_type == "page" && slug.current == $slug][0]{
    content[0]{
      ...,
      "avatar": avatar.asset -> url,
      links[]{
        ...,
        "customColor": customColor.hex,
      }
    }
  }
`
const {
  data: {
    value: { content },
  },
} = await useSanityQuery<{ content: BioContent }>(query, {
  slug: 'bio',
})

useSeoMeta({
  title: 'Bio',
  description: 'Explore my favorite links and special gift',
})
</script>
