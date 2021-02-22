import { createApp } from 'vue';

import App from './App.vue';
import { router } from './routes';
import { store, key } from './store';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import './assets/styles/styles.css';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages,
  missingWarn: false,
  fallbackWarn: false,
});

app.use(router).use(store, key).use(i18n).mount('#app');
