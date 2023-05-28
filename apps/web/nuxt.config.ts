// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'vercel-edge'
  },
  routeRules: {
    '/blog': { prerender: true },
    '/blog/**': { isr: true }
  },
  css: [
    '~/assets/styles/globals.css',
    '@flaticon/flaticon-uicons/css/all/all.css'
  ],
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  devtools: {
    enabled: true
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: process.env.SANITY_API_VERSION,
    dataset: process.env.SANITY_DATASET,
    useCdn: true
  }
})
