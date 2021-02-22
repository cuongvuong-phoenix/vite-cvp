<template>
  <HelloWorld :msg="message"></HelloWorld>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import HelloWorld from '../components/HelloWorld.vue';

  const message = ref('Vite Template');
</script>
