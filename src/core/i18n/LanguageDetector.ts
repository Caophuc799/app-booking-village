import { NativeModules } from 'react-native';
import { LanguageDetectorModule } from 'i18next';
import { isIos } from 'utils/platform';

import { locales } from './locales';

export const getDeviceLocale = () => {
  const locale: string = isIos()
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

  return locale.replaceAll('_', '-');
};

const LanguageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => {
    const locale = getDeviceLocale();

    // exact match: en-US -> en-US
    if (locales.includes(locale)) {
      return locale;
    }

    // partial match: en-US -> en
    if (locales.includes(locale.split('-')[0])) {
      return locale.split('-')[0];
    }

    // en-US -> match first 'en'
    const match = locales.find(l => {
      const [currentCode] = locale.split('-');
      const [code] = l.split('-');

      if (code === currentCode) {
        return l;
      }
      return undefined;
    });

    return match ?? 'en';
  },
  cacheUserLanguage: () => {},
};

export default LanguageDetector;
