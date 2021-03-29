<template>
  <h1 class="text-4xl font-bold text-center">{{ t('nav.about') }}</h1>

  <MarkdownAbout class="mt-8"></MarkdownAbout>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { useI18n } from 'vue-i18n';
  import MarkdownAbout from '~/components/markdown/About.md';

  useHead({
    title: 'Vite-VCP | About',
  });

  const { t } = useI18n();
</script>
