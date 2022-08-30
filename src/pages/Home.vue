<template>
  <div class="text-center">
    <Hello />

    <div class="mt-4">{{ t('pages.home.counter') }}: {{ counterStore.counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useStoreCounter } from '~/store';
  import Hello from '~/components/Hello.vue';

  const counterStore = useStoreCounter();
  const { t } = useI18n();
</script>
