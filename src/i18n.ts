import { nextTick } from 'vue';
import { createI18n, I18nOptions, I18n as baseI18n } from 'vue-i18n';

export type I18n = baseI18n<{}, {}, {}, false>;

export const LANGUAGES: { locale: string; name: string; default?: boolean }[] = [
  { locale: 'en', name: 'English', default: true },
  { locale: 'vi', name: 'Tiếng Việt' },
];

export const LOCALES = LANGUAGES.map((lang) => lang.locale);

export const DEFAULT_LOCALE = LANGUAGES.find((lang) => lang.default)!.locale;

export const setI18nLanguage = (i18n: I18n, locale: string) => {
  i18n.global.locale.value = locale;

  document.querySelector('html')?.setAttribute('lang', locale);
};

export const loadLocaleMessages = async (i18n: I18n, locale: string) => {
  const messages = await import(`./locales/${locale}.yaml`);

  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
};

export function setupI18n(options: I18nOptions) {
  if (options.legacy) {
    throw new Error(
      `This setup doesn't support "Legacy API" mode. Check out https://vue-i18n.intlify.dev/guide/advanced/lazy.html#lazy-loading if you want to use 2 modes in the same time (not recommended).`
    );
  }

  const i18n = (createI18n(options) as unknown) as I18n;

  setI18nLanguage(i18n, DEFAULT_LOCALE);

  return i18n;
}
