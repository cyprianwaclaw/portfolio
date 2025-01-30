// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@nuxt/image'],
  css: ['@/assets/style/tailwind.css', '@/assets/style/style.scss']
})