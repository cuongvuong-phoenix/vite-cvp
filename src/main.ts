import viteSSR from 'vite-ssr';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import { SSRContext } from './types';
import App from '~/App.vue';
import { routes } from '~/router';
import { store, key } from '~/store';
import { setupI18n } from '~/locales';
// Distinct-importing styles to prevent long hot-reloading when editing self-styles.
import '~/styles/vendors/tailwind.css';
import '~/styles/vendors/nprogress.css';
import '~/styles/markdown/main.css';
import '~/styles/main.css';

const CLIENT = !import.meta.env.SSR;

export default viteSSR(App, { routes }, async (ctx: SSRContext) => {
  const { app, router } = ctx;

  const i18n = await setupI18n(ctx);

  const head = createHead();

  if (CLIENT) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }

  app.use(store, key).use(i18n).use(head).use(MotionPlugin);

  return { head };
});
