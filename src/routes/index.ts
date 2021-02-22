import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
