import { initReactI18next } from 'react-i18next';
import i18n, { Resource } from 'i18next';

import { appLog } from 'core/logger';

import LanguageDetector from './LanguageDetector';
import { resources } from './locales/index';

export * from './LanguageDetector';
export const initialize = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      resources: resources as Resource,
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      returnNull: false,
      react: {
        useSuspense: false, // we explicitly don't want to use suspense
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      saveMissing: true,
      missingKeyHandler(_, __, key) {
        if (__DEV__) {
          appLog.warn('missing translation', { key });
        }
      },
    });
  appLog.debug('i18n initialized');
};
