import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import App from '~/App.vue';
import { setupRouter } from '~/routes';
import { store, key } from '~/store';
import { setupI18n } from '~/i18n';
import en from '~/locales/en.yaml';
import '~/styles/tailwind.css';
import '~/styles/markdown.css';
import '~/styles/nprogress.css';
import '~/styles/main.css';

const production = import.meta.env.PROD;

const app = createApp(App);

const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
  missingWarn: production,
  fallbackWarn: production,
});

const router = setupRouter(i18n);

const head = createHead();

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(router).use(store, key).use(i18n).use(head).use(MotionPlugin).mount('#app');
