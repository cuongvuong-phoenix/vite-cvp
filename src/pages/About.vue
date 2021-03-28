<template>
  <MarkdownAbout></MarkdownAbout>

  <MarkdownTypography></MarkdownTypography>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import MarkdownAbout from '~/components/markdown/About.md';
  import MarkdownTypography from '~/components/markdown/Typography.md';

  useHead({
    title: 'Vite-VCP | About',
  });
</script>
