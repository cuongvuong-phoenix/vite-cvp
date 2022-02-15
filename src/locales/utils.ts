import { nextTick } from 'vue';
import { type I18n as baseI18n } from 'vue-i18n';

export type I18n = baseI18n<{}, {}, {}, false>;

/* ----------------------------------------------------------------
Constants
---------------------------------------------------------------- */
export const LANGUAGES: { locale: string; name: string; default?: boolean }[] = [
  { locale: 'en', name: 'English', default: true },
  { locale: 'vi', name: 'Tiếng Việt' },
];

export const LOCALES = LANGUAGES.map((lang) => lang.locale);

export const DEFAULT_LOCALE = LANGUAGES.find((lang) => lang.default)!.locale;

/* ----------------------------------------------------------------
Logic
---------------------------------------------------------------- */
export function setI18nLocale(i18n: I18n, locale: string) {
  i18n.global.locale.value = locale;

  document.querySelector('html')?.setAttribute('lang', locale);
}

export async function loadLocaleMessage(i18n: I18n, locale: string) {
  const message = await import(`./translations/${locale}.yaml`);

  i18n.global.setLocaleMessage(locale, message.default);

  return await nextTick();
}
