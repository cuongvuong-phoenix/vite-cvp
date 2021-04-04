import { h, resolveComponent } from 'vue';
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import Home from '~/pages/Home.vue';
import NotFound from '~/pages/NotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:locale?/',
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
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
