import { useLanguage } from "@/hooks/useLanguage";
import { SupportedLanguage } from "@/i18n";
import { useTranslation } from "@/i18n/useTranslation";
import { Pressable, StyleSheet, Text, View } from "react-native";

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const { language, changeLanguage, supportedLanguages } = useLanguage();

  return (
    <View accessibilityLabel={t("language.label")} style={styles.container}>
      {supportedLanguages.map((code) => {
        const isSelected = language === code;

        return (
          <Pressable
            key={code}
            accessibilityRole="button"
            accessibilityLabel={t(`language.${code}`)}
            accessibilityState={{ selected: isSelected }}
            onPress={() => changeLanguage(code)}
            style={[styles.chip, isSelected && styles.chipSelected]}
          >
            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
              {LANGUAGE_LABELS[code]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: "#3d3d3d",
  },
  chipSelected: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },
  chipText: {
    color: "#b0b0b0",
    fontSize: 13,
    fontWeight: "700",
  },
  chipTextSelected: {
    color: "#1b1b1b",
  },
});
