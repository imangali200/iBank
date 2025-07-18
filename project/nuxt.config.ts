// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    autoImport: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.base_Url,
    },
  },
});
