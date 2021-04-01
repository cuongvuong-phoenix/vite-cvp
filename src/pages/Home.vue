<template>
  <div class="text-center">
    <Hello></Hello>

    <div class="mt-4">{{ t('pages.home.counter') }}: {{ storeCounter.counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { useI18n } from 'vue-i18n';
  import { useStoreCounter } from '~/store';
  import Hello from '~/components/Hello.vue';

  useHead({
    title: 'Vite-VCP',
  });

  const storeCounter = useStoreCounter();
  const { t } = useI18n();
</script>
