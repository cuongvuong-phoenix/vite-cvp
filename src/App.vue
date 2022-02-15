<template>
  <div class="container px-10 py-8 mx-auto">
    <Header />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRef, watch } from 'vue';
  import { RouterView, useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { useHead } from '@vueuse/head';
  import Header from '~/components/Header.vue';

  const route = useRoute();
  const { t } = useI18n();

  /* ----------------------------------------------------------------
  App title
  ---------------------------------------------------------------- */
  const titleBase = 'Vite-VCP';

  const title = reactive({
    full: titleBase,
    short: '',
  });

  // Auto-change `<title>` based on route name and locale.
  watch([() => route.name, () => route.params.locale], ([name, _]) => {
    const titleRoute = t(`nav.${String(name)}`);

    title.full = name === 'home' ? titleBase : `${titleBase} · ${titleRoute}`;
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
