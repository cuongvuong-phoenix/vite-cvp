import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {
  counter: number;
  amount: number;
}

export const key: InjectionKey<Store<State>> = Symbol('Vuex State');

export const store = createStore<State>({
  state: {
    counter: 0,
    amount: 1,
  },

  mutations: {
    increaseCounter(state, n) {
      state.counter += n;
    },
    decreaseCounter(state, n) {
      state.counter -= n;
    },
    setAmount(state, amount) {
      state.amount = amount;
    },
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
