import { createI18n } from 'vue-i18n';
import { SSRContext } from '~/types';
import { I18n, DEFAULT_LOCALE, LOCALES, loadLocaleMessage, setI18nLocale, importLocaleMessage } from '~/locales/utils';

export * from '~/locales/utils';

const PRODUCTION = import.meta.env.PROD;

export function setupRouterForI18n(i18n: I18n, { router }: SSRContext) {
  const locale = i18n.global.locale.value;

  // Guard for auto loading messages & setting locale based on `locale` param.
  router.beforeEach(async (to, _, next) => {
    const { name, params, query, hash } = to;

    const paramLocale = params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramLocale)) {
      return next({ name, params: { ...params, locale }, query, hash });
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

  const { name, params, query, hash } = initialRoute;
  let paramLocale = params.locale as string;

  if (!LOCALES.includes(paramLocale)) {
    paramLocale = DEFAULT_LOCALE;
    await router.push({ name, params: { ...params, locale: paramLocale }, query, hash });
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
