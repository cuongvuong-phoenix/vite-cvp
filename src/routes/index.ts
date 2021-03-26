import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { I18n, loadLocaleMessages, LOCALES, setI18nLanguage } from '~/i18n';
import Home from '~/pages/Home.vue';

export const setupRouter = (i18n: I18n) => {
  const locale = i18n.global.locale.value;

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
    if (!LOCALES.includes(paramsLocale)) {
      return next({ name: 'home', params: { locale } });
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
