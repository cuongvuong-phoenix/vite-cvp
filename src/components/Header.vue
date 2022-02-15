<template>
  <!-- "Navigations" -->
  <header>
    <nav class="flex items-center justify-center space-x-4">
      <RouterLink :to="{ name: 'home', params: { locale } }" :title="t('nav.home')" class="router-link">
        <i-ion-home-outline />
      </RouterLink>

      <span>|</span>

      <RouterLink :to="{ name: 'about', params: { locale } }" :title="t('nav.about')" class="router-link">
        <i-ion-ios-information-circle-outline />
      </RouterLink>

      <span>|</span>

      <RouterLink
        :to="{ name: 'markdown-preview', params: { locale } }"
        :title="t('nav.markdown-preview')"
        class="router-link"
      >
        <i-teenyicons-markdown-outline />
      </RouterLink>

      <span>|</span>

      <a
        rel="noreferrer"
        href="https://github.com/vuong-cuong-phoenix/vite-vcp"
        target="_blank"
        title="GitHub"
        class="router-link"
      >
        <i-codicon-github-alt />
      </a>
    </nav>
    <!-- END "Navigations" -->

    <div class="flex items-center justify-center mt-4 mb-8 space-x-4">
      <!-- "Language Dropdown" -->
      <div
        ref="langDropdownRef"
        class="relative z-10"
        @click="isLangDropdownMenuOpen = true"
        @mouseenter="isLangDropdownMenuOpen = true"
        @mouseleave="isLangDropdownMenuOpen = false"
      >
        <button
          :title="t('button.change-languages')"
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 rounded-full hover:text-amber-500"
        >
          <i-ion-language-outline />
        </button>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="scale-75 opacity-0"
          leave-active-class="transition duration-150 ease-in"
          leave-to-class="scale-75 opacity-0"
        >
          <ul
            v-show="isLangDropdownMenuOpen"
            class="absolute py-2 origin-top-left bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700"
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
        </transition>
      </div>
      <!-- END "Language Dropdown" -->

      <button
        :title="isDarkMode ? t('button.turn-off-dark-mode') : t('button.turn-on-dark-mode')"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 rounded-full hover:text-amber-500"
        @click="toggleDarkMode()"
      >
        <i-ion-moon-outline v-if="isDarkMode" />
        <i-ion-sunny-outline v-else />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { onClickOutside, useDark, useToggle } from '@vueuse/core';
  import { LANGUAGES } from '~/locales';
  import { RouteNameNotProvidedError } from '~/errors';

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
    const { name, params, query, hash, fullPath } = router.currentRoute.value;

    if (!name) {
      throw new RouteNameNotProvidedError(fullPath);
    }

    router.push({
      name,
      params: { ...params, locale: val },
      query,
      hash,
    });
  });

  // Change locale.
  const isLangDropdownMenuOpen = ref(false);
  const langDropdownRef = ref<HTMLDivElement | null>(null);

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

  .router-link-exact-active {
    @apply text-amber-600;
  }
</style>
