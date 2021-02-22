<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-center h-24 space-x-4">
      <router-link to="/" class="router-link">
        <i-ion-home-outline></i-ion-home-outline>
        <span>Home</span>
      </router-link>
      <span>|</span>
      <router-link to="/about" class="router-link">
        <span>About</span>
        <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
      </router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style lang="postcss" scoped>
  .router-link {
    @apply flex items-center space-x-2 text-lg;

    &:hover {
      @apply text-green-500;
    }
  }

  .router-link-active {
    @apply text-green-700;
  }
</style>
