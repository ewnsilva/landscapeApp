import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";

export const LANGUAGE_STORAGE_KEY = "@14ndscapes:language";
export const SUPPORTED_LANGUAGES = ["en", "pt", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

function isSupportedLanguage(value: string | null | undefined): value is SupportedLanguage {
  return !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

function getDeviceLanguage(): SupportedLanguage {
  try {
    const Localization = require("expo-localization") as typeof import("expo-localization");
    const [locale] = Localization.getLocales();
    const languageCode = locale?.languageCode?.toLowerCase();

    if (isSupportedLanguage(languageCode)) {
      return languageCode;
    }
  } catch {
    // Ignore — fall back to the default language below.
  }

  return DEFAULT_LANGUAGE;
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    pt: { translation: pt },
  },
  lng: getDeviceLanguage() || DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

export async function initializeLanguage(): Promise<void> {
  try {
    const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    const language = isSupportedLanguage(storedLanguage) ? storedLanguage : getDeviceLanguage();

    if (language !== i18n.language) {
      await i18n.changeLanguage(language);
    }
  } catch {
    // Keep whatever language is already active if storage/device detection fails.
  }
}

export async function setLanguage(language: SupportedLanguage): Promise<void> {
  await i18n.changeLanguage(language);
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}

export default i18n;
