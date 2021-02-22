<template>
  <div>
    <h1 class="text-4xl font-bold">Vite-template</h1>

    <h2 class="mt-8 text-xl">{{ msg }}</h2>

    <button
      type="button"
      class="inline-flex items-center justify-center px-3 py-2 mt-16 border border-current rounded-lg hover:text-green-500"
      @click="increase()"
    >
      {{ t('increase-button') }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '../store';

  const store = useStore();
  const { t } = useI18n();

  const props = defineProps({
    msg: {
      type: String,
      required: true,
    },
  });

  const increase = () => {
    store.commit('increment', 1);
  };
</script>

<i18n lang="yaml">
en:
  increase-button: 'Increase Counter'
vi:
  increase-button: 'Tăng Bộ đếm'
</i18n>
