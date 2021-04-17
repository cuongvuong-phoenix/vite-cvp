<template>
  <div>
    <h1 class="text-4xl font-bold text-center">{{ t('nav.about') }}</h1>

    <MarkdownAbout class="mt-8" />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import MarkdownAbout from '~/components/markdown/About.md';

  const { t } = useI18n();
</script>
