import { h } from 'vue';
import { RouteRecordRaw, RouterView } from 'vue-router';
import Home from '~/pages/Home.vue';
import NotFound from '~/pages/NotFound.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/:locale?/',
    component: {
      render: () => h(RouterView),
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
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
      },
    ],
  },
];
