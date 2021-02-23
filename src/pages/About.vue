<template>
  <div class="text-center">{{ t('about-page') }}</div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  about-page: 'About page'
vi:
  about-page: 'Trang Thông tin'
</i18n>
