// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
  ],
  routeRules: {
    '/blog/**': { isr: true },
  },
  css: [
    '~/assets/styles/globals.css',
    '@flaticon/flaticon-uicons/css/all/all.css',
  ],
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
  },
  devtools: {
    enabled: true,
  },
  sanity: {
    projectId: '5vg8abbe',
    apiVersion: '2023-05-25',
    dataset: 'production',
  },
  runtimeConfig: {
    public: {
      host: process.env.APP_HOST_DOMAIN,
      brevoApiKey: process.env.BREVO_API_KEY,
    },
  },
})
