import viteSSR from 'vite-ssr';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import App from '~/App.vue';
import { routes } from '~/router';
import { store, key } from '~/store';
import { setupI18n, setupRouterForI18n } from '~/locales';
import en from '~/locales/translations/en.yaml';
// Distinct-importing styles to prevent long hot-reloading when editing self-styles.
import '~/styles/vendors/tailwind.css';
import '~/styles/vendors/nprogress.css';
import '~/styles/markdown/main.css';
import '~/styles/main.css';

const isProduction = import.meta.env.PROD;

const isClient = !import.meta.env.SSR;

export default viteSSR(App, { routes }, (ctx) => {
  const { app, router } = ctx;

  const i18n = setupI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
    },
    missingWarn: isProduction,
    fallbackWarn: isProduction,
  });

  setupRouterForI18n(i18n, ctx);

  const head = createHead();

  if (isClient) {
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
