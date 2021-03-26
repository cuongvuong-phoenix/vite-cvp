# About

Test...

- [Normal link](#)
- `Inline code`
- [`Link with inline-code (no language)`](#)
- [`Link with inline-code (language)`{lang=markup}](#)

This template is consisted of:

- `Vite`
- `Vue-Router`

```
unknown language
```

```ts
import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from '~/App.vue';
import { setupRouter } from '~/routes';
import { store, key } from '~/store';
import { setupI18n } from '~/i18n';
import en from '~/locales/en.yaml';
import '~/styles/tailwind.css';
import '~/styles/markdown.css';
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

app.use(router).use(store, key).use(i18n).use(head).mount('#app');
```
