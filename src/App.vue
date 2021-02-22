<template>
  <nav class="flex items-center justify-center h-24 space-x-4">
    <router-link to="/" class="text-lg hover:text-green-500">Home</router-link>
    <span>|</span>
    <router-link to="/about" class="text-lg hover:text-green-500">About</router-link>
  </nav>

  <router-view></router-view>
</template>

<style lang="postcss" scoped>
  .router-link-active {
    @apply text-green-700;
  }
</style>
