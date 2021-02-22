<template>
  <div class="space-y-4 text-center">
    <HelloWorld :msg="message"></HelloWorld>
    <div>Current counted: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useStore } from '../store';
  import HelloWorld from '../components/HelloWorld.vue';

  const store = useStore();

  const counter = computed(() => store.state.counter);

  const message = ref('Vite Template');
</script>
