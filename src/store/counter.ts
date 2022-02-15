import { defineStore } from 'pinia';

export const useStoreCounter = defineStore('couter', {
  state: () => {
    return {
      counter: 0,
      amount: 1,
    };
  },
  actions: {
    increaseCounter(n: number) {
      this.counter += n;
    },
    decreaseCounter(n: number) {
      this.counter -= n;
    },
    setAmount(amount: number) {
      this.amount = amount;
    },
  },
});
