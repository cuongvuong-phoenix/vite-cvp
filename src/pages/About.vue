<template>
  <div>
    <h1 class="text-center text-4xl font-bold">{{ t('nav.about') }}</h1>

    <MarkdownAbout class="mt-8" />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import MarkdownAbout from '~/components/markdown/About.md';

  const { t } = useI18n();
</script>
