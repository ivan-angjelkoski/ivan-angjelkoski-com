import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      meta: [
        { name: "theme-color", content: "#f5f5f2" },
        { name: "color-scheme", content: "light" },
      ],
    },
  },
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
});
