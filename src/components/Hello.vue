<template>
  <div>
    <i-ion-ios-bolt class="mx-auto text-7xl text-amber-500" />

    <h1 class="mt-2 text-4xl font-bold">{{ name }}</h1>

    <div class="mt-4 text-lg">
      <h3>{{ t('msg.1') }}</h3>

      <h3 class="mt-2">
        <i18n-t keypath="msg.2">
          <br />
          <a
            rel="noreferrer"
            href="https://github.com/antfu/vitesse"
            target="_blank"
            class="inline-flex items-center object-center mt-1 space-x-1 hover:text-amber-600"
          >
            <i-carbon-campsite />
            Vitesse
          </a>
        </i18n-t>
      </h3>
    </div>

    <!-- "Counter" -->
    <div class="flex items-center justify-center mt-12 space-x-4">
      <button
        :title="t('button.decrease-counter', { n: amount })"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:text-amber-500"
        @click="storeCounter.decrease(amount)"
      >
        <i-ion-minus />
      </button>

      <input v-model.number="amount" :title="t('input.amount')" type="number" class="w-24 text-center rounded-lg" />

      <button
        :title="t('button.increase-counter', { n: amount })"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:text-amber-500"
        @click="storeCounter.increase(amount)"
      >
        <i-ion-plus />
      </button>
    </div>
    <!-- END "Counter" -->
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useStoreCounter } from '~/store';

  const { name = 'Vite-VCP' } = defineProps<{
    name?: string;
  }>();

  const storeCounter = useStoreCounter();
  const { t } = useI18n();

  const amount = computed({
    get() {
      return storeCounter.amount;
    },
    set(val: number) {
      storeCounter.setAmount(val);
    },
  });
</script>
