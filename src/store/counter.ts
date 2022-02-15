import { defineStore } from 'pinia';

export const useStoreCounter = defineStore('couter', {
  state: () => {
    return {
      counter: 0,
      amount: 1,
    };
  },
  actions: {
    increase(n: number) {
      this.counter += n;
    },
    decrease(n: number) {
      this.counter -= n;
    },
    setAmount(amount: number) {
      this.amount = amount;
    },
  },
});
