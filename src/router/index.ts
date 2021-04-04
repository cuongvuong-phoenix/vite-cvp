import { h, resolveComponent } from 'vue';
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { LOCALES, DEFAULT_LOCALE } from '~/locales';
import Home from '~/pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:locale?',
    component: {
      render: () => h(resolveComponent('RouterView')),
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('~/pages/About.vue'),
      },
      {
        path: 'markdown-preview',
        name: 'markdown-preview',
        component: () => import('~/pages/MarkdownPreview.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: (to) => {
      const locale = to.params.pathMatch[0] as string;

      return { name: 'home', params: { locale: LOCALES.includes(locale) ? locale : DEFAULT_LOCALE } };
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
