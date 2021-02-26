<template>
  <div class="container px-4 mx-auto mt-8">
    <nav class="flex items-center justify-center space-x-4">
      <router-link :to="{ name: 'home', params: { locale } }" :title="t('nav.home')" class="router-link">
        <i-ion-home-outline></i-ion-home-outline>
      </router-link>
      <span>|</span>
      <router-link :to="{ name: 'about', params: { locale } }" :title="t('nav.about')" class="router-link">
        <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
      </router-link>
    </nav>

    <div class="flex items-center justify-center mt-4 mb-8 space-x-4">
      <select v-model="currentLocale" :title="t('select.change-languages')">
        <option v-for="locale in LOCALES" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
      </select>

      <button
        @click="toggleDarkMode()"
        :title="isDarkMode ? t('button.turn-off-dark-mode') : t('button.turn-on-dark-mode')"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 rounded-full"
      >
        <i-ion-moon-outline v-if="isDarkMode"></i-ion-moon-outline>
        <i-ion-sunny-outline v-else></i-ion-sunny-outline>
      </button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
  import { useDark, useToggle } from '@vueuse/core';
  import { useHead } from '@vueuse/head';
  import { LOCALES } from './i18n';

  const router = useRouter();
  const { t, locale } = useI18n();

  // <head>
  useHead({
    meta: [
      {
        name: 'application-name',
        content: 'Vite-vcp',
      },
      {
        name: 'description',
        content: 'Opinionated Vite Starter Template. Inpsired by Vitesse https://github.com/antfu/vitesse',
      },
      {
        name: 'author',
        content: 'Vuong Chi Cuong (vuongcuong.phoenix@gmail.com)',
      },
    ],
  });

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

  // Dark modes.
  const isDarkMode = useDark({ storageKey: 'theme' });
  const toggleDarkMode = useToggle(isDarkMode);
</script>

<style lang="postcss" scoped>
  .router-link {
    @apply flex items-center space-x-2 text-xl;

    &:hover {
      @apply text-amber-500;
    }
  }

  .router-link-active {
    @apply text-amber-600;
  }
</style>
