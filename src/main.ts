import { createApp } from 'vue';
import 'focus-visible/dist/focus-visible.min.js';
import App from './App.vue';
import { setupRouter } from './routes';
import { store, key } from './store';
import { setupI18n } from './i18n';
import en from './locales/en.yaml';
import './styles/tailwind.css';
import 'prism-theme-one-light-dark/prism-onedark.css';

const app = createApp(App);

const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
  missingWarn: false,
  fallbackWarn: false,
});

const router = setupRouter(i18n);

app.use(router).use(store, key).use(i18n).mount('#app');
