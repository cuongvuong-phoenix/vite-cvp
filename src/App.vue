<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-center mt-8 space-x-4">
      <router-link :to="{ name: 'home', params: { locale } }" class="router-link">
        <i-ion-home-outline></i-ion-home-outline>
        <span>{{ t('nav.home') }}</span>
      </router-link>
      <span>|</span>
      <router-link :to="{ name: 'about', params: { locale } }" class="router-link">
        <span>{{ t('nav.about') }}</span>
        <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
      </router-link>
    </nav>

    <div class="flex items-center justify-center mt-2 mb-8">
      <select v-model="currentLocale" class="">
        <option v-for="locale in LOCALES" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
      </select>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
  import { LOCALES } from './i18n';

  const router = useRouter();
  const { t, locale } = useI18n();

  // Clone to avoid double-changing global `locale`.
  const currentLocale = ref(locale.value);

  // Sync with routes.
  watch(router.currentRoute, (route) => {
    currentLocale.value = route.params.locale as string;
  });

  // Sync with template changes.
  watch(currentLocale, (val) => {
    router.push({
      name: router.currentRoute.value.name!,
      params: { locale: val },
    });
  });
</script>

<style lang="postcss" scoped>
  .router-link {
    @apply flex items-center space-x-2;

    &:hover {
      @apply text-teal-500;
    }
  }

  .router-link-active {
    @apply text-teal-700;
  }
</style>
