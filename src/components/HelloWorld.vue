<template>
  <div>
    <h1 class="text-4xl font-bold">{{ msg }}</h1>

    <button
      type="button"
      class="inline-flex items-center justify-center px-3 py-2 mt-16 border border-current rounded-lg hover:text-green-500"
      @click="increase()"
    >
      Increase counter
    </button>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useStore } from '../store';

  const store = useStore();

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
