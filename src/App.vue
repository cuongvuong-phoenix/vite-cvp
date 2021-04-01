<template>
  <div class="container px-10 py-8 mx-auto">
    <Header></Header>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import Header from '~/components/Header.vue';

  const appBaseTitle = 'Vite-VCP';
  const appTitle = ref(appBaseTitle);

  useHead({
    title: appTitle,
    meta: [
      {
        name: 'application-name',
        content: appBaseTitle,
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

  // Auto-changing `<title>` based on current route.
  const router = useRouter();
  const { t } = useI18n();

  watch(router.currentRoute, (route) => {
    const name = String(route.name);

    appTitle.value = name === 'home' ? appBaseTitle : `${appBaseTitle} | ${t(`nav.${name}`)}`;
  });
</script>
