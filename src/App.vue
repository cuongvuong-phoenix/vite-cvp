<template>
  <div class="container px-10 py-8 mx-auto">
    <Header></Header>

    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <component :is="Component"></component>
      </Suspense>
    </RouterView>
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

  function getTitleByRoute(route: any, t: any) {
    const name = String(route.name);

    const titleRoute = t(`nav.${name}`);

    return {
      full: name === 'home' ? titleBase : `${titleBase} | ${titleRoute}`,
      short: titleRoute,
    };
  }

  // Get title from `initialRoute` of SSR.
  const titleInitial = getTitleByRoute(router.currentRoute.value, t);

  // Auto-changing `<title>` based on current route.
  const title = reactive({
    full: titleInitial.full,
    short: titleInitial.short,
  });

  watch(router.currentRoute, (route) => {
    const titleByRoute = getTitleByRoute(route, t);

    title.full = titleByRoute.full;
    title.short = titleByRoute.short;
  });

  /* ----------------------------------------------------------------
  <head>
  ---------------------------------------------------------------- */
  useHead({
    title: toRef(title, 'full'),
    meta: [
      {
        name: 'description',
        content: '⚡ Opinionated Vite Starter Template. Inspired by Vitesse https://github.com/antfu/vitesse',
      },
      {
        name: 'author',
        content: 'Cuong Vuong Chi <vuongcuong.phoenix@gmail.com>',
      },
      // Open Graph protocol (https://ogp.me/).
      {
        property: 'og:site_name',
        content: titleBase,
      },
      {
        property: 'og:title',
        content: toRef(title, 'short'),
      },
      {
        property: 'og:description',
        content: '⚡ Opinionated Vite Starter Template. Inspired by Vitesse https://github.com/antfu/vitesse',
      },
    ],
  });
</script>
