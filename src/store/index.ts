import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {
  counter: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    counter: 0,
  },

  mutations: {
    increment(state, n) {
      state.counter += n;
    },
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
