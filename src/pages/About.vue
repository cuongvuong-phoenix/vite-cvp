<template>
  <AboutMD></AboutMD>

  <Typography></Typography>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import AboutMD from '../components/About.md';
  import Typography from '../components/Typography.md';

  useHead({
    title: 'Vite-vcp | About',
  });
</script>
