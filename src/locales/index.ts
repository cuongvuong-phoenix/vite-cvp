import { createI18n } from 'vue-i18n';
import { Router } from 'vue-router';
import { I18n, LOCALES, DEFAULT_LOCALE, loadLocaleMessages, setI18nLanguage } from '~/locales/utils';

export * from '~/locales/utils';

const PRODUCTION = import.meta.env.PROD;

export function setupRouterForI18n(i18n: I18n, router: Router) {
  // Guard for auto loading messages & setting locale based on `locale` param.
  router.beforeEach(async (to, _, next) => {
    const { name, params, query, hash } = to;

    const paramLocale = params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramLocale)) {
      return next({ name, params: { ...params, locale: DEFAULT_LOCALE }, query, hash });
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramLocale)) {
      await loadLocaleMessages(i18n, paramLocale);
    }

    setI18nLanguage(i18n, paramLocale);

    return next();
  });
}

export function setupI18n(router: Router) {
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: DEFAULT_LOCALE,
    missingWarn: PRODUCTION,
    fallbackWarn: PRODUCTION,
  }) as I18n;

  setupRouterForI18n(i18n, router);

  return i18n;
}
