<template>
  <div>
    <!-- Schema.org Global Nodes -->
    <SchemaOrgOrganization name="Demo" image="/og.png" />
    <SchemaOrgWebSite name="Nuxt Schema Org Demo" />
    <SchemaOrgWebPage />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
