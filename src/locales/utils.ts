import { nextTick } from 'vue';
import { I18n as baseI18n } from 'vue-i18n';

const CLIENT = !import.meta.env.SSR;

export type I18n = baseI18n<{}, {}, {}, false>;

export const LANGUAGES: { locale: string; name: string; default?: boolean }[] = [
  { locale: 'en', name: 'English', default: true },
  { locale: 'vi', name: 'Tiếng Việt' },
];

export const LOCALES = LANGUAGES.map((lang) => lang.locale);

export const DEFAULT_LOCALE = LANGUAGES.find((lang) => lang.default)!.locale;

const messageImports = import.meta.glob('./translations/*.yaml');

export function importLocaleMessage(locale: string) {
  const [, importLocale] = Object.entries(messageImports).find(([key]) => key.includes(`/${locale}.yaml`)) || [];

  return importLocale && importLocale();
}

export function setI18nLocale(i18n: I18n, locale: string) {
  i18n.global.locale.value = locale;

  if (CLIENT) {
    document.querySelector('html')?.setAttribute('lang', locale);
  }
}

export async function loadLocaleMessage(i18n: I18n, locale: string) {
  const message = await importLocaleMessage(locale)!;

  i18n.global.setLocaleMessage(locale, message.default);

  return nextTick();
}
