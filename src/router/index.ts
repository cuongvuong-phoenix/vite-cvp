import { RouteRecordRaw } from 'vue-router';
import { h, resolveComponent } from 'vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/:locale?/',
    component: {
      render: () => h(resolveComponent('RouterView')),
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('~/pages/Home.vue'),
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
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('~/pages/NotFound.vue'),
      },
    ],
  },
];
