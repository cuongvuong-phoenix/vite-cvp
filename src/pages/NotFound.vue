<template>
  <div class="flex flex-col items-center justify-center text-center">
    <div class="p-8 border border-current md:p-16 2xl:p-24 rounded-2xl">
      <h1 class="text-9xl">404</h1>

      <p class="mt-4" v-html="t('pages.not-found.msg')" />

      <RouterLink
        :to="{ name: 'home', params: { locale: locale } }"
        class="inline-block mt-8 text-amber-600 hover:text-amber-500"
      >
        {{ t('pages.not-found.to-home') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();
</script>
