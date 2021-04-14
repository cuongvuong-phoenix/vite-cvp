<template>
  <div class="container px-10 py-8 mx-auto">
    <Header></Header>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRef, watch } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import Header from '~/components/Header.vue';

  const router = useRouter();
  const { t } = useI18n();

  /* ----------------------------------------------------------------
  App title
  ---------------------------------------------------------------- */
  const titleBase = 'Vite-VCP';

  // Auto-change `<title>` based on current route.
  const title = reactive({
    full: titleBase,
    short: t(`nav.home`),
  });

  watch(router.currentRoute, (route) => {
    const name = String(route.name);

    const titleRoute = t(`nav.${name}`);

    title.full = name === 'home' ? titleBase : `${titleBase} | ${titleRoute}`;
    title.short = titleRoute;
  });

  /* ----------------------------------------------------------------
  <head>
  ---------------------------------------------------------------- */
  useHead({
    title: toRef(title, 'full'),
    meta: [
      // Open Graph protocol (https://ogp.me/).
      {
        property: 'og:title',
        content: toRef(title, 'short'),
      },
    ],
  });
</script>
