import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import { SSRContext } from '~/types';
import { I18n, DEFAULT_LOCALE, LOCALES } from '~/locales/utils';

export * from '~/locales/utils';

const PRODUCTION = import.meta.env.PROD;

const CLIENT = !import.meta.env.SSR;

const messageImports = import.meta.glob('./translations/*.yaml');

function importLocale(locale: string) {
  const [, importLocale] = Object.entries(messageImports).find(([key]) => key.includes(`/${locale}.`)) || [];

  return importLocale && importLocale();
}

export function setI18nLocale(i18n: I18n, locale: string) {
  i18n.global.locale.value = locale;

  if (CLIENT) {
    document.querySelector('html')?.setAttribute('lang', locale);
  }
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  const message = await importLocale(locale)!;

  i18n.global.setLocaleMessage(locale, message.default);

  return nextTick();
}

export async function setupI18n({ router, initialRoute }: SSRContext) {
  let paramLocale = initialRoute.params.locale as string;

  if (!LOCALES.includes(paramLocale)) {
    paramLocale = DEFAULT_LOCALE;
    router.push({ name: 'home', params: { locale: paramLocale } });
  }

  const message = await importLocale(paramLocale)!;

  const i18n = (createI18n({
    legacy: false,
    locale: paramLocale,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      [paramLocale]: message.default,
    },
    missingWarn: PRODUCTION,
    fallbackWarn: PRODUCTION,
  }) as unknown) as I18n;

  setI18nLocale(i18n, paramLocale);

  return i18n;
}

export function setupRouterForI18n(i18n: I18n, { router }: SSRContext) {
  const locale = i18n.global.locale.value;

  // Guard for auto load messages & set locale.
  router.beforeEach(async (to, _, next) => {
    const paramLocale = to.params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramLocale)) {
      return next({ name: 'home', params: { locale } });
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramLocale)) {
      await loadLocaleMessages(i18n, paramLocale);
    }

    setI18nLocale(i18n, paramLocale);

    return next();
  });
}
