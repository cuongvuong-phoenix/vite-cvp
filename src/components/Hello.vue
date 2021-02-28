<template>
  <div>
    <h1 class="text-4xl font-bold">Vite-vcp</h1>

    <h2 class="mt-8 text-lg">{{ msg }}</h2>

    <div class="flex items-center justify-center mt-16 space-x-4">
      <button
        :title="t('button.decrease-counter', { n: amount })"
        @click="decrease()"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:text-amber-500"
      >
        <i-ion-minus></i-ion-minus>
      </button>

      <input v-model.number="amount" :title="t('input.amount')" type="number" class="w-24 text-center rounded-lg" />

      <button
        :title="t('button.increase-counter', { n: amount })"
        @click="increase()"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:text-amber-500"
      >
        <i-ion-plus></i-ion-plus>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '~/store';

  const store = useStore();
  const { t } = useI18n();

  const props = defineProps({
    msg: {
      type: String,
      required: true,
    },
  });

  const amount = ref(1);

  const increase = () => {
    store.commit('increaseCounter', amount.value);
  };

  const decrease = () => {
    store.commit('decreaseCounter', amount.value);
  };
</script>
