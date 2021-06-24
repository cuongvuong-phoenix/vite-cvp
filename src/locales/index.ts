import { createI18n } from 'vue-i18n';
import { Router } from 'vue-router';
import { I18n, LOCALES, DEFAULT_LOCALE, loadLocaleMessages, setI18nLocale } from '~/locales/utils';
import { ErrorRouterNameNotProvided } from '~/utils/exceptions';

export * from '~/locales/utils';

function setupRouterForI18n(i18n: I18n, router: Router) {
  // Auto loading messages & setting locale based on `locale` param.
  router.beforeEach(async (to) => {
    const { name, params, query, hash, fullPath } = to;

    if (!name) {
      throw new ErrorRouterNameNotProvided(fullPath);
    }

    const locale = params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(locale)) {
      return { name, params: { ...params, locale: DEFAULT_LOCALE }, query, hash };
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(locale)) {
      await loadLocaleMessages(i18n, locale);
    }

    setI18nLocale(i18n, locale);
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
