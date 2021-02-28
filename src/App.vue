<template>
  <div class="container p-4 mx-auto mt-8">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import Header from '~/components/Header.vue';

  // <head>
  useHead({
    meta: [
      {
        name: 'application-name',
        content: 'Vite-vcp',
      },
      {
        name: 'description',
        content: 'Opinionated Vite Starter Template. Inpsired by Vitesse https://github.com/antfu/vitesse',
      },
      {
        name: 'author',
        content: 'Vuong Chi Cuong (vuongcuong.phoenix@gmail.com)',
      },
    ],
  });
</script>
