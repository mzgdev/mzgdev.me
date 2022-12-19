<template>
  <div>
    <TheNavbar />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "My App",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    lang: "es",
  },
});
</script>
