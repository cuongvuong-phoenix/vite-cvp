import viteSSR from 'vite-ssr';
import { createHead } from '@vueuse/head';
import NProgress from 'nprogress';
import { SSRContext } from './types';
import App from '~/App.vue';
import { routes } from '~/router';
import { store } from '~/store';
import { setupI18n } from '~/locales';
import '~/assets/styles/vendors/tailwind.css';
import '~/assets/styles/vendors/nprogress.css';
import '~/assets/styles/markdown/main.css';
import '~/assets/styles/main.css';

const CLIENT = !import.meta.env.SSR;

export default viteSSR(App, { routes }, async (ctx: SSRContext) => {
  const { app, router, initialState } = ctx;

  // NProgress.
  if (CLIENT) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }

  // State hydration with Pinia.
  if (!CLIENT) {
    initialState.store = store.state.value;
  } else {
    store.state.value = initialState.store;
  }

  // vue-i18n.
  const i18n = await setupI18n(router);

  // @vueuse/head.
  const head = createHead();

  app.use(store).use(i18n).use(head);

  return { head };
});
