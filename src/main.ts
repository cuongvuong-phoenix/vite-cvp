import viteSSR from 'vite-ssr';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import { SSRContext } from './types';
import App from '~/App.vue';
import { routes } from '~/router';
import { store } from '~/store';
import { setupI18n } from '~/locales';
// Distinct-importing styles to prevent long hot-reloading when editing self-styles.
import '~/assets/styles/vendors/tailwind.css';
import '~/assets/styles/vendors/nprogress.css';
import '~/assets/styles/markdown/main.css';
import '~/assets/styles/main.css';

const CLIENT = !import.meta.env.SSR;

export default viteSSR(App, { routes }, async (ctx: SSRContext) => {
  const { app, router, initialState } = ctx;

  const i18n = await setupI18n(ctx);

  const head = createHead();

  // State hydration with Pinia.
  if (!CLIENT) {
    initialState.store = JSON.stringify(store.state.value);
  } else {
    store.state.value = JSON.parse(initialState.store);
  }

  // NProgress.
  if (CLIENT) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }

  app.use(store).use(i18n).use(head).use(MotionPlugin);

  return { head };
});
