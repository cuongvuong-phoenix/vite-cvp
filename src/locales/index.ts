import { createI18n } from 'vue-i18n';
import { Router } from 'vue-router';
import NProgress from 'nprogress';
import { I18n, LOCALES, DEFAULT_LOCALE, loadLocaleMessages, setI18nLanguage } from '~/locales/utils';
import { ErrorRouterNameNotProvided } from '~/utils/exceptions';

export * from '~/locales/utils';

export function setupRouterForI18n(i18n: I18n, router: Router) {
  // Guard for auto loading messages & setting locale based on `locale` param.
  router.beforeEach(async (to) => {
    NProgress.start();

    const { name, params, query, hash, fullPath } = to;

    if (!name) {
      throw new ErrorRouterNameNotProvided(fullPath);
    }

    const paramLocale = params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramLocale)) {
      return { name, params: { ...params, locale: DEFAULT_LOCALE }, query, hash };
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramLocale)) {
      await loadLocaleMessages(i18n, paramLocale);
    }

    setI18nLanguage(i18n, paramLocale);
  });
}

export function setupI18n(router: Router) {
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: DEFAULT_LOCALE,
    missingWarn: false,
    fallbackWarn: false,
  }) as I18n;

  setupRouterForI18n(i18n, router);

  return i18n;
}
