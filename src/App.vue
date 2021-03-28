<template>
  <div class="container px-10 py-8 mx-auto">
    <Header></Header>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import Header from '~/components/Header.vue';

  useHead({
    meta: [
      {
        name: 'application-name',
        content: 'Vite-VCP',
      },
      {
        name: 'description',
        content: '⚡ Opinionated Vite Starter Template. Inpsired by Vitesse https://github.com/antfu/vitesse',
      },
      {
        name: 'author',
        content: 'Vuong Chi Cuong (vuongcuong.phoenix@gmail.com)',
      },
    ],
  });
</script>
