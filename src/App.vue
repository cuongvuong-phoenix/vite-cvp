<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-center h-24 space-x-4">
      <router-link to="/" class="router-link">
        <i-ion-home-outline></i-ion-home-outline>
        <span>{{ t('nav.home') }}</span>
      </router-link>
      <span>|</span>
      <router-link to="/about" class="router-link">
        <span>{{ t('nav.about') }}</span>
        <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
      </router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

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
