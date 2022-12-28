<template>
  <div>
    <div class="navbar bg-base-200 w-full justify-between">
      <div class="flex">
        <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
          Mzg.dev
        </nuxt-link>
      </div>
      <div class="hidden sm:flex">
        <ul class="menu menu-horizontal p-0 flex-nowrap">
          <li><a>Item 1</a></li>
          <li><a>Parent</a></li>
          <li><a>Item 3</a></li>
        </ul>
        <nuxt-link to="/about" class="btn btn-sm btn-outline">Get started</nuxt-link>
      </div>
    </div>
  </div>
</template>
