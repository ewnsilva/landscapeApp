// src/app/city/[id].tsx
import { WeatherCard } from "@/components/WeatherCard";
import { cities } from "@/data/cities";
import { useTranslation } from "@/i18n/useTranslation";
import { getLocalizedCity } from "@/utils/getLocalizedCity";
import { Image } from "expo-image";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useMemo } from "react";
import { Alert, Pressable, ScrollView, Share, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function CityScreen() {
  const { i18n, t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Busca a cidade correspondente ao ID da rota
  const city = useMemo(() => {
    return cities.find((item) => item.id === id);
  }, [id]);

  const localizedCity = useMemo(() => {
    return city ? getLocalizedCity(city, i18n.language) : undefined;
  }, [city, i18n.language]);

  const relatedCities = useMemo(() => {
    if (!city) return [];

    return city.relatedCitiesIds
      .map((relatedCityId) => cities.find((item) => item.id === relatedCityId))
      .filter((relatedCity): relatedCity is (typeof cities)[number] => Boolean(relatedCity));
  }, [city]);

  if (!city) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>{t("city.notFound")}</Text>
        <Link href="../" asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>{t("city.backToHome")}</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  const handleShare = async () => {
    try {
      await Share.share({
        title: t("city.shareTitle", { name: city.name }),
        message: t("city.shareMessage", {
          name: city.name,
          country: city.country,
          url: `landscapeapp://city/${city.id}`,
        }),
      });
    } catch {
      Alert.alert(t("city.shareError"), t("city.shareErrorMessage"));
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={city.coverImage}
        style={styles.coverImage}
        contentFit="cover"
        transition={400}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>{city.name}</Text>
        {city.country && <Text style={styles.country}>{city.country}</Text>}
      </View>

      <Text style={styles.description}>{localizedCity?.description}</Text>

      <WeatherCard latitude={city.location.latitude} longitude={city.location.longitude} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("city.location")}</Text>
        <MapView
          initialRegion={{
            latitude: city.location.latitude,
            longitude: city.location.longitude,
            latitudeDelta: 0.18,
            longitudeDelta: 0.18,
          }}
          scrollEnabled
          style={styles.map}
          zoomEnabled
        >
          <Marker coordinate={city.location} description={city.country} title={city.name} />
        </MapView>
      </View>

      <Pressable accessibilityRole="button" onPress={handleShare} style={styles.shareButton}>
        <Text style={styles.shareButtonText}>{t("city.share")}</Text>
      </Pressable>

      {localizedCity && localizedCity.touristAttractions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("city.attractions")}</Text>
          {localizedCity.touristAttractions.map((attraction) => (
            <View key={attraction.id} style={styles.attractionCard}>
              <Text style={styles.attractionName}>• {attraction.name}</Text>
              {attraction.description && (
                <Text style={styles.attractionDescription}>{attraction.description}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {relatedCities.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("city.relatedDestinations")}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.relatedCitiesList}
          >
            {relatedCities.map((relatedCity) => (
              <Pressable
                key={relatedCity.id}
                onPress={() =>
                  router.push({
                    pathname: "/city/[id]",
                    params: { id: relatedCity.id },
                  })
                }
                style={styles.relatedCityCard}
              >
                <Image
                  contentFit="cover"
                  source={relatedCity.coverImage}
                  style={styles.relatedCityImage}
                />
                <Text numberOfLines={1} style={styles.relatedCityName}>
                  {relatedCity.name}
                </Text>
                <Text numberOfLines={1} style={styles.relatedCityCountry}>
                  {relatedCity.country}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <Link href="../" asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>{t("city.backToHome")}</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  content: {
    paddingBottom: 32,
  },
  coverImage: {
    width: "100%",
    height: 260,
  },
  headerContainer: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  country: {
    fontSize: 16,
    color: "#a0a0a0",
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    color: "#d0d0d0",
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  attractionCard: {
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  attractionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  attractionDescription: {
    fontSize: 14,
    color: "#a0a0a0",
    marginTop: 4,
  },
  map: {
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
  },
  shareButton: {
    marginHorizontal: 16,
    marginTop: 24,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  shareButtonText: {
    color: "#1b1b1b",
    fontSize: 16,
    fontWeight: "bold",
  },
  relatedCitiesList: {
    gap: 12,
    paddingRight: 16,
  },
  relatedCityCard: {
    width: 150,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#2a2a2a",
  },
  relatedCityImage: {
    width: "100%",
    height: 96,
  },
  relatedCityName: {
    paddingHorizontal: 10,
    paddingTop: 10,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  relatedCityCountry: {
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 10,
    color: "#a0a0a0",
    fontSize: 13,
  },
  backButton: {
    marginTop: 24,
    marginHorizontal: 16,
    padding: 14,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  notFoundContainer: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  notFoundText: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 16,
  },
});
