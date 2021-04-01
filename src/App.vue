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
  import { ref, watch } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import Header from '~/components/Header.vue';

  const router = useRouter();
  const { t } = useI18n();

  const appBaseTitle = 'Vite-VCP';

  function getAppTitleByRoute(route: any, t: any) {
    const name = String(route.name);

    return name === 'home' ? appBaseTitle : `${appBaseTitle} | ${t(`nav.${name}`)}`;
  }

  // Based on 'initialRoute' of SSR.
  const appTitle = ref(getAppTitleByRoute(router.currentRoute.value, t));

  // Auto-changing `<title>` based on current route.
  watch(router.currentRoute, (route) => {
    appTitle.value = getAppTitleByRoute(route, t);
  });

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
      // Open Graph protocol (https://ogp.me/).
      {
        property: 'og:title',
        content: appTitle,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  });
</script>
