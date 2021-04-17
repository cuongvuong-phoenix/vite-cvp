<template>
  <div class="container px-10 py-8 mx-auto">
    <Header />

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRef, watch } from 'vue';
  import { useRouter, RouterView } from 'vue-router';
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

<style lang="postcss">
  .fade-enter-active {
    transition: opacity 0.25s ease-out;
  }

  .fade-leave-active {
    transition: opacity 0.25s ease-in;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
