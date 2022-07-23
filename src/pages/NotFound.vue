<template>
  <div class="flex flex-col items-center justify-center text-center">
    <div class="rounded-2xl border border-current p-8 md:p-16 2xl:p-24">
      <h1 class="text-9xl">404</h1>

      <p class="mt-4" v-html="t('pages.not-found.msg')" />

      <RouterLink
        :to="{ name: 'home', params: { locale } }"
        class="mt-8 inline-block text-amber-600 hover:text-amber-500"
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
