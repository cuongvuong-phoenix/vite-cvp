import { nextTick } from 'vue';
import { createI18n, I18nOptions } from 'vue-i18n';
import { Router } from 'vue-router';
import { I18n, DEFAULT_LOCALE, LOCALES } from '~/locales/utils';

export * from '~/locales/utils';

export function setI18nLocale(i18n: I18n, locale: string) {
  i18n.global.locale.value = locale;

  if (!import.meta.env.SSR) {
    document.querySelector('html')?.setAttribute('lang', locale);
  }
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  const messages = await import(`./translations/${locale}.yaml`);

  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export function setupI18n(options: I18nOptions) {
  if (options.legacy) {
    throw new Error(
      `This setup doesn't support "Legacy API" mode. Check out https://vue-i18n.intlify.dev/guide/advanced/lazy.html#lazy-loading if you want to use 2 modes in the same time (not recommended).`
    );
  }

  const i18n = (createI18n(options) as unknown) as I18n;

  setI18nLocale(i18n, DEFAULT_LOCALE);

  return i18n;
}

export function setupRouterForI18n(i18n: I18n, { router }: { router: Router }) {
  const locale = i18n.global.locale.value;

  // Guard for auto load messages & set locale.
  router.beforeEach(async (to, _, next) => {
    const paramsLocale = to.params.locale as string;

    // Check if got the right locales.
    if (!LOCALES.includes(paramsLocale)) {
      return next({ name: 'home', params: { locale } });
    }

    // Cancel loading if already loaded.
    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale);
    }

    setI18nLocale(i18n, paramsLocale);

    return next();
  });
}
