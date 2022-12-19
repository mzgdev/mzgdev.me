<script setup lang="ts">
// Nuxt Config
definePageMeta({
  layout: "default",
});

// Head
useHead({
  title: "Test WebPage name",
});

// Schema
useSchemaOrg([
  defineWebSite({
    potentialAction: [
      defineSearchAction({
        target: "/search?q={search_term_string}",
      }),
    ],
  }),
  defineSoftwareApp({
    name: "test",
  }),
]);

// ColorMode
const colorMode = useColorMode();
const themes = [
  "system",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
</script>

<template>
  <div>
    <!-- HERO -->
    <div class="hero min-h-[800px] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there About</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <!-- Cambiar Tema -->
    <div class="p-4 flex flex-wrap gap-4">
      <BaseAppButton class="btn">Hello daisyUI</BaseAppButton>
      <select v-model="colorMode.preference" class="select select-bordered">
        <option disabled selected>Theme</option>
        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
      </select>
    </div>
    <!-- <SchemaOrgDebug /> -->
  </div>
</template>
