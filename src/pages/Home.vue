<template>
  <div class="text-center">
    <Hello :msg="t('hello')"></Hello>

    <div class="mt-4">{{ t('counter') }}: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '~/store';
  import Hello from '~/components/Hello.vue';

  useHead({
    title: 'Vite-vcp',
  });

  const store = useStore();
  const { t } = useI18n();

  const counter = computed(() => store.state.counter);
</script>

<i18n lang="yaml">
en:
  counter: Counter
vi:
  counter: Bộ đếm
</i18n>
