import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';
import NProgress from 'nprogress';
import App from '~/App.vue';
import { router } from '~/router';
import { store, key } from '~/store';
import { setupI18n } from '~/locales';
// Distinct-importing styles to prevent long hot-reloading when editing self-styles.
import '~/styles/vendors/tailwind.css';
import '~/styles/vendors/nprogress.css';
import '~/styles/markdown/main.css';
import '~/styles/main.css';

const app = createApp(App);

const i18n = setupI18n(router);

const head = createHead();

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(router).use(store, key).use(i18n).use(head).use(MotionPlugin).mount('#app');
