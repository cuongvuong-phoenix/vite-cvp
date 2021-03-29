<template>
  <MarkdownAbout></MarkdownAbout>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import MarkdownAbout from '~/components/markdown/About.md';

  useHead({
    title: 'Vite-VCP | About',
  });
</script>
