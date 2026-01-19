export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' }
    }
  },

  css: ['~/assets/css/tailwind.css'],

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      siteUrl: 'https://www.amaterminais.com.br'
    }
  }
})
