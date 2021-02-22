<template>
  <div class="text-center">{{ t('about') }}</div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  about: 'About Vite-template'
vi:
  about: 'Đôi chút về Vite-template'
</i18n>
