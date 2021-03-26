import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import { SSRContext } from '~/types';
import { I18n, DEFAULT_LOCALE, LOCALES, loadLocaleMessage, setI18nLocale, importLocaleMessage } from '~/locales/utils';

export * from '~/locales/utils';

const PRODUCTION = import.meta.env.PROD;

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
      await loadLocaleMessage(i18n, paramLocale);
    }

    setI18nLocale(i18n, paramLocale);

    return next();
  });
}

export async function setupI18n(ctx: SSRContext) {
  const { router, initialRoute } = ctx;

  let paramLocale = initialRoute.params.locale as string;

  if (!LOCALES.includes(paramLocale)) {
    paramLocale = DEFAULT_LOCALE;
    await router.push({ name: 'home', params: { locale: paramLocale } });
  }

  const message = await importLocaleMessage(paramLocale)!;

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

  setupRouterForI18n(i18n, ctx);

  return i18n;
}
