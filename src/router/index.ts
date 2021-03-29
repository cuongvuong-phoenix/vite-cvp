import { RouteRecordRaw } from 'vue-router';
import { DEFAULT_LOCALE, LOCALES } from '~/locales';

export const routes: RouteRecordRaw[] = [
  {
    path: '/:locale/',
    name: 'home',
    component: () => import('~/pages/Home.vue'),
  },
  {
    path: '/:locale/about',
    name: 'about',
    component: () => import('~/pages/About.vue'),
  },
  {
    path: '/:locale/markdown-preview',
    name: 'markdown-preview',
    component: () => import('~/pages/MarkdownPreview.vue'),
  },
  {
    path: '/:locale?/:pathMatch(.*)*',
    name: 'not-found',
    redirect: (to) => {
      const locale = to.params.locale as string;

      return { name: 'home', params: { locale: LOCALES.includes(locale) ? locale : DEFAULT_LOCALE } };
    },
  },
];
