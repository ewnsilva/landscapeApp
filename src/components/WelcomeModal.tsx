import { useTranslation } from "@/i18n/useTranslation";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface WelcomeModalProps {
  readonly visible: boolean;
  readonly onDismiss: () => void;
}

export function WelcomeModal({ visible, onDismiss }: WelcomeModalProps) {
  const { t } = useTranslation();

  return (
    <Modal animationType="fade" onRequestClose={onDismiss} transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.logo}>🗺️</Text>
          <Text style={styles.title}>{t("welcome.title")}</Text>
          <Text style={styles.description}>{t("welcome.description")}</Text>

          <Pressable accessibilityRole="button" onPress={onDismiss} style={styles.button}>
            <Text style={styles.buttonText}>{t("welcome.cta")}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#2a2a2a",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },
  logo: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: "#d0d0d0",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 24,
  },
  button: {
    alignSelf: "stretch",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  buttonText: {
    color: "#1b1b1b",
    fontSize: 16,
    fontWeight: "bold",
  },
});
