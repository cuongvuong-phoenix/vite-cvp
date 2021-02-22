<template>
  <HelloWorld :msg="msg"></HelloWorld>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  const msg = ref('Hello Cuong');
</script>
