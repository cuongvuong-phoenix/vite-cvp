import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStoreCounter = defineStore('counter', () => {
  /* ----------------------------------------------------------------
  Counter
  ---------------------------------------------------------------- */
  const counter = ref(0);

  function increase(n: number) {
    counter.value += n;
  }

  function decrease(n: number) {
    counter.value -= n;
  }

  /* ----------------------------------------------------------------
  Amount
  ---------------------------------------------------------------- */
  const amount = ref(1);

  return { counter, amount, increase, decrease };
});
