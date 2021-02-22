<template>
  <div class="flex items-center justify-center h-32">
    <h1 class="text-4xl font-bold">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    msg: {
      type: String,
      required: true,
    },
  });
</script>
