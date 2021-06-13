import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import NProgress from 'nprogress';
import App from '~/App.vue';
import { router } from '~/router';
import { store } from '~/store';
import { setupI18n } from '~/locales';
// Distinct-importing styles to prevent long hot-reloading when editing self-styles.
import '~/assets/styles/vendors/tailwind.css';
import '~/assets/styles/vendors/nprogress.css';
import '~/assets/styles/markdown/main.css';
import '~/assets/styles/main.css';

const app = createApp(App);

const i18n = setupI18n(router);

const head = createHead();

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(router).use(store).use(i18n).use(head).mount('#app');
