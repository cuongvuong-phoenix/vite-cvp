import { nextTick } from 'vue';
import { createI18n, I18nOptions, I18n, Composer } from 'vue-i18n';

export const LOCALES: { code: string; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'vi', name: 'Tiếng Việt' },
];

export const setI18nLanguage = (i18n: I18n, locale: string) => {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    ((i18n.global as unknown) as Composer).locale.value = locale;
  }

  document.querySelector('html')?.setAttribute('lang', locale);
};

export const loadLocaleMessages = async (i18n: I18n, locale: string) => {
  const messages = await import(`./locales/${locale}.yaml`);

  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
};

export const setupI18n = (options: I18nOptions = { locale: 'en' }) => {
  const i18n = createI18n(options) as I18n;
  setI18nLanguage(i18n, options.locale!);

  return i18n;
};
