import i18n, {
  setLanguage as persistLanguage,
  SUPPORTED_LANGUAGES,
  SupportedLanguage,
} from "@/i18n";
import { useCallback, useEffect, useState } from "react";

export function useLanguage() {
  const [language, setLanguageState] = useState<SupportedLanguage>(
    i18n.language as SupportedLanguage,
  );

  useEffect(() => {
    const handleLanguageChanged = (nextLanguage: string) => {
      setLanguageState(nextLanguage as SupportedLanguage);
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const changeLanguage = useCallback((nextLanguage: SupportedLanguage) => {
    return persistLanguage(nextLanguage);
  }, []);

  return { language, changeLanguage, supportedLanguages: SUPPORTED_LANGUAGES };
}
