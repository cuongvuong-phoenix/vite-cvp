<template>
  <div class="container px-10 py-8 mx-auto">
    <Header />

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </transition>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRef, watch } from 'vue';
  import { RouterView, useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { useHead } from '@vueuse/head';
  import Header from '~/components/Header.vue';

  const router = useRouter();
  const { t } = useI18n();

  /* ----------------------------------------------------------------
  App title
  ---------------------------------------------------------------- */
  const titleBase = 'Vite-VCP';

  const title = reactive({
    full: '',
    short: '',
  });

  // Auto-change `<title>` based on current route.
  watch(router.currentRoute, (route) => {
    const name = String(route.name);

    const titleRoute = t(`nav.${name}`);

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
