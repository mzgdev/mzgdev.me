import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Nuxt Config
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "nuxt-schema-org",
    "@nuxtjs/sitemap",
    "vue-plausible",
  ],
  buildModules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/html-validator",
    /* "@nuxtjs/web-vitals", */
  ],
  // Modules Config
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  robots: {},
  schemaOrg: {
    canonicalHost: "https://example.com",
  },
  sitemap: {
    hostname: "https://example.com",
    gzip: true,
  },
  /* webVitals: {
    provider: "log",
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false,
  }, */
  plausible: {},
});
