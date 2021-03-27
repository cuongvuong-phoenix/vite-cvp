import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { LOCALES, DEFAULT_LOCALE } from '~/locales';
import Home from '~/pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:locale/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:locale/about',
    name: 'about',
    component: () => import('~/pages/About.vue'),
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

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
