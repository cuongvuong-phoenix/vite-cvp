import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { Composer, I18n } from 'vue-i18n';
import { loadLocaleMessages, LOCALES, setI18nLanguage } from '../i18n';

import Home from '../pages/Home.vue';

export const setupRouter = (i18n: I18n) => {
  const locale = i18n.mode === 'legacy' ? i18n.global.locale : ((i18n.global as unknown) as Composer).locale.value;

  const routes: RouteRecordRaw[] = [
    {
      path: '/:locale',
      name: 'home',
      component: Home,
    },
    {
      path: '/:locale/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home', params: { locale } }),
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  // Guard for auto load messages & set locale.
  router.beforeEach(async (to, from, next) => {
    const paramsLocale = to.params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.map((locale) => locale.code).includes(paramsLocale)) {
      return next(`/${locale}`);
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale);
    }

    setI18nLanguage(i18n, paramsLocale);

    return next();
  });

  return router;
};
