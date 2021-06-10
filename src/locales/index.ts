import { createI18n } from 'vue-i18n';
import NProgress from 'nprogress';
import { SSRContext } from '~/types';
import { I18n, DEFAULT_LOCALE, LOCALES, loadLocaleMessage, setI18nLocale, importLocaleMessage } from '~/locales/utils';
import { ErrorRouterNameNotProvided } from '~/utils/exceptions';

export * from '~/locales/utils';

const CLIENT = !import.meta.env.SSR;

export function setupRouterForI18n(i18n: I18n, { router }: SSRContext) {
  const locale = i18n.global.locale.value;

  // Guard for auto loading messages & setting locale based on `locale` param.
  router.beforeEach(async (to, _) => {
    if (CLIENT) {
      NProgress.start();
    }

    const { name, params, query, hash, fullPath } = to;

    if (!name) {
      throw new ErrorRouterNameNotProvided(fullPath);
    }

    const paramLocale = params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramLocale)) {
      return { name, params: { ...params, locale }, query, hash };
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramLocale)) {
      await loadLocaleMessage(i18n, paramLocale);
    }

    setI18nLocale(i18n, paramLocale);
  });
}

export async function setupI18n(ctx: SSRContext) {
  const { router, initialRoute } = ctx;

  // Initially load the right message on server-side,
  // because `beforeEach()` won't run when server-side render for the first time.
  const { name, params, query, hash, href } = initialRoute;

  if (!name) {
    throw new ErrorRouterNameNotProvided(href);
  }

  let paramLocale = params.locale as string;

  if (!LOCALES.includes(paramLocale)) {
    paramLocale = DEFAULT_LOCALE;
    await router.push({ name, params: { ...params, locale: paramLocale }, query, hash });
  }

  const message = await importLocaleMessage(paramLocale)!;

  const i18n = createI18n({
    legacy: false,
    locale: paramLocale,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      [paramLocale]: message.default,
    },
    missingWarn: false,
    fallbackWarn: false,
  }) as unknown as I18n;

  setI18nLocale(i18n, paramLocale);

  setupRouterForI18n(i18n, ctx);

  return i18n;
}
