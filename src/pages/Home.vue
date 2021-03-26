<template>
  <div class="text-center">
    <Hello :msg="t('hello')"></Hello>
    <div class="mt-4">{{ t('counter') }}: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useHead } from '@vueuse/head';
  import { useStore } from '~/store';
  import Hello from '~/components/Hello.vue';

  const store = useStore();
  const { t } = useI18n();

  useHead({
    title: 'Vite-vcp',
  });

  const counter = computed(() => store.state.counter);
</script>

<i18n lang="yaml">
en:
  counter: Counter
vi:
  counter: Bộ đếm
</i18n>
