import { RouteRecordRaw } from 'vue-router';
import { DEFAULT_LOCALE } from '~/locales';

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
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: () => ({ name: 'home', params: { locale: DEFAULT_LOCALE } }),
  },
];
