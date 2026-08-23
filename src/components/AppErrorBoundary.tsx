import { Component, type ErrorInfo, type ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  readonly children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro não tratado na interface:", error, errorInfo);
  }
  private handleTryAgain = () => this.setState({ hasError: false });
  render() {
    if (this.state.hasError)
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Algo deu errado</Text>
          <Text style={styles.description}>
            Não foi possível carregar esta tela. Tente novamente.
          </Text>
          <Pressable onPress={this.handleTryAgain} style={styles.button}>
            <Text style={styles.buttonText}>Tentar novamente</Text>
          </Pressable>
        </View>
      );
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#1b1b1b",
  },
  title: { color: "#ffffff", fontSize: 24, fontWeight: "bold" },
  description: { color: "#b0b0b0", fontSize: 16, marginTop: 8, textAlign: "center" },
  button: {
    marginTop: 24,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonText: { color: "#1b1b1b", fontSize: 16, fontWeight: "bold" },
});
