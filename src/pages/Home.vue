<template>
  <div class="text-center">
    <Hello></Hello>

    <div class="mt-4">{{ t('pages.home.counter') }}: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '~/store';
  import Hello from '~/components/Hello.vue';

  useHead({
    title: 'Vite-VCP',
  });

  const store = useStore();
  const { t } = useI18n();

  const counter = computed(() => store.state.counter);
</script>
