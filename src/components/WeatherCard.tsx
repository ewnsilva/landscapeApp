import { useWeather } from "@/hooks/useWeather";
import { getWeatherPresentation } from "@/services/weather";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface WeatherCardProps {
  readonly latitude: number;
  readonly longitude: number;
}

export function WeatherCard({ latitude, longitude }: WeatherCardProps) {
  const { data, isError, isFetching, isLoading, refetch } = useWeather(latitude, longitude);

  if (isLoading && !data) {
    return (
      <View accessibilityLabel="Carregando clima" style={styles.skeletonCard}>
        <View style={[styles.skeleton, styles.skeletonTitle]} />
        <View style={[styles.skeleton, styles.skeletonContent]} />
      </View>
    );
  }

  if (isError && !data) {
    return (
      <View style={styles.errorCard}>
        <Text style={styles.errorTitle}>Clima indisponível</Text>
        <Text style={styles.errorText}>Verifique sua conexão e tente novamente.</Text>
        <Pressable onPress={() => refetch()} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Tentar novamente</Text>
        </Pressable>
      </View>
    );
  }

  if (!data) return null;
  const presentation = getWeatherPresentation(data.weatherCode, data.isDay);

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.overline}>Clima agora</Text>
        <Text style={styles.condition}>{presentation.label}</Text>
        <Text style={styles.humidity}>Umidade: {data.humidity}%</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.icon}>{presentation.icon}</Text>
        <Text style={styles.temperature}>{Math.round(data.temperature)}°</Text>
      </View>
      {(isFetching || isError) && (
        <Text style={styles.cacheMessage}>
          {isFetching ? "Atualizando…" : "Exibindo último clima salvo"}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    minHeight: 118,
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overline: { color: "#a0a0a0", fontSize: 13, fontWeight: "600" },
  condition: { color: "#ffffff", fontSize: 19, fontWeight: "bold", marginTop: 4 },
  humidity: { color: "#d0d0d0", fontSize: 14, marginTop: 8 },
  temperatureContainer: { flexDirection: "row", alignItems: "center" },
  icon: { fontSize: 30, marginRight: 8 },
  temperature: { color: "#ffffff", fontSize: 38, fontWeight: "bold" },
  cacheMessage: { position: "absolute", right: 16, bottom: 12, color: "#a0a0a0", fontSize: 11 },
  skeletonCard: {
    minHeight: 118,
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
  },
  skeleton: { borderRadius: 6, backgroundColor: "#3d3d3d" },
  skeletonTitle: { width: "35%", height: 16 },
  skeletonContent: { width: "70%", height: 30, marginTop: 14 },
  errorCard: {
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#744",
    backgroundColor: "#352426",
  },
  errorTitle: { color: "#ffffff", fontSize: 17, fontWeight: "bold" },
  errorText: { color: "#e0c8c8", fontSize: 14, marginTop: 6 },
  retryButton: {
    alignSelf: "flex-start",
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  retryButtonText: { color: "#1b1b1b", fontSize: 14, fontWeight: "bold" },
});
