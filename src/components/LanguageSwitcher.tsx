import { useLanguage } from "@/hooks/useLanguage";
import { SupportedLanguage } from "@/i18n";
import { useTranslation } from "@/i18n/useTranslation";
import { Pressable, StyleSheet, Text, View } from "react-native";

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

interface LanguageSwitcherProps {
  readonly compact?: boolean;
}

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const { language, changeLanguage, supportedLanguages } = useLanguage();

  return (
    <View
      accessibilityLabel={t("language.label")}
      style={[styles.container, compact && styles.compactContainer]}
    >
      {supportedLanguages.map((code) => {
        const isSelected = language === code;

        return (
          <Pressable
            key={code}
            accessibilityRole="button"
            accessibilityLabel={t(`language.${code}`)}
            accessibilityState={{ selected: isSelected }}
            onPress={() => changeLanguage(code)}
            style={[styles.chip, compact && styles.compactChip, isSelected && styles.chipSelected]}
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
  compactContainer: {
    gap: 4,
    paddingHorizontal: 0,
    paddingTop: 0,
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
  compactChip: {
    paddingHorizontal: 8,
    paddingVertical: 5,
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
