<template>
  <!-- "Navigations" -->
  <nav class="flex items-center justify-center space-x-4">
    <RouterLink :to="{ name: 'home', params: { locale } }" :title="t('nav.home')" class="router-link">
      <i-ion-home-outline></i-ion-home-outline>
    </RouterLink>
    <span>|</span>
    <RouterLink :to="{ name: 'about', params: { locale } }" :title="t('nav.about')" class="router-link">
      <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
    </RouterLink>
  </nav>
  <!-- END "Navigations" -->

  <div class="flex items-center justify-center mt-4 mb-8 space-x-4">
    <!-- "Language Dropdown" -->
    <div
      ref="langDropdownRef"
      class="relative"
      @click="isLangDropdownMenuOpen = true"
      @mouseenter="isLangDropdownMenuOpen = true"
      @mouseleave="isLangDropdownMenuOpen = false"
    >
      <button
        :title="t('button.change-languages')"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 rounded-full hover:text-amber-500"
      >
        <i-ion-language-outline></i-ion-language-outline>
      </button>

      <ul
        v-show="isLangDropdownMenuOpen"
        :initial="{
          scale: 0,
          opacity: 0,
          translateX: '-50%',
        }"
        :visible="{
          scale: 1,
          opacity: 1,
        }"
        class="absolute py-2 bg-white border border-gray-100 rounded-lg shadow-lg left-1/2 top-full dark:bg-gray-900 dark:border-gray-700"
      >
        <li v-for="lang in LANGUAGES" :key="lang.locale" class="py-2 -my-2">
          <button
            type="button"
            class="w-full px-3 whitespace-nowrap hover:text-amber-500"
            :class="{
              'text-amber-600': currentLocale === lang.locale,
            }"
            @click="currentLocale = lang.locale"
          >
            {{ lang.name }}
          </button>
        </li>
      </ul>
    </div>
    <!-- END "Language Dropdown" -->

    <button
      :title="isDarkMode ? t('button.turn-off-dark-mode') : t('button.turn-on-dark-mode')"
      type="button"
      class="inline-flex items-center justify-center w-8 h-8 rounded-full hover:text-amber-500"
      @click="toggleDarkMode"
    >
      <i-ion-moon-outline v-if="isDarkMode"></i-ion-moon-outline>
      <i-ion-sunny-outline v-else></i-ion-sunny-outline>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { useDark, useToggle, onClickOutside } from '@vueuse/core';
  import { LANGUAGES } from '~/locales';

  const router = useRouter();
  const { t, locale } = useI18n();

  // -------- Locales --------
  // Clone to avoid double-changing global `locale`.
  const currentLocale = ref(locale.value);

  // Sync with routes.
  watch(router.currentRoute, (route) => {
    currentLocale.value = route.params.locale as string;
  });

  // Sync with template changes.
  watch(currentLocale, (val) => {
    const { name, params, query, hash } = router.currentRoute.value;

    router.push({
      name: name!,
      query,
      hash,
      params: {
        ...params,
        locale: val,
      },
    });
  });

  // Change locale.
  const isLangDropdownMenuOpen = ref(false);
  const langDropdownRef = ref<HTMLDivElement>(null);

  onClickOutside(langDropdownRef, () => (isLangDropdownMenuOpen.value = false));

  // -------- Dark mode --------
  const isDarkMode = useDark({ storageKey: 'theme' });
  const toggleDarkMode = useToggle(isDarkMode);
</script>

<style lang="postcss" scoped>
  .router-link {
    @apply inline-flex items-center justify-center w-8 h-8 rounded-full text-xl;

    &:hover {
      @apply text-amber-500;
    }
  }

  .router-link-active {
    @apply text-amber-600;
  }
</style>
