import { useFavorites } from "@/contexts/FavoritesContext";
import { City } from "@/data/types";
import { useTranslation } from "@/i18n/useTranslation";
import { getLocalizedCity } from "@/utils/getLocalizedCity";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { memo, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CityItemProps {
  readonly city: City;
}

function CityItem({ city }: CityItemProps) {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite ? isFavorite(city.id) : false;
  const localizedCity = useMemo(() => getLocalizedCity(city, i18n.language), [city, i18n.language]);

  const handleCardPress = () => {
    router.push({
      pathname: "/city/[id]",
      params: { id: city.id },
    });
  };

  const handleFavoritePress = () => {
    if (toggleFavorite) {
      toggleFavorite(city.id);
    }
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={handleCardPress} style={styles.cardPressable}>
        <Image contentFit="cover" source={city.coverImage} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{city.name}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {localizedCity.description}
          </Text>
        </View>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t("cityItem.favoriteAccessibilityLabel", { name: city.name })}
        hitSlop={12}
        onPress={handleFavoritePress}
        style={styles.favoriteButton}
      >
        <Text style={styles.favoriteIcon}>{favorited ? "❤️" : "🤍"}</Text>
      </Pressable>
    </View>
  );
}

export default memo(CityItem);

const styles = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: "#2a2a2a",
    borderRadius: 16,
    overflow: "hidden",
  },
  cardPressable: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 180,
  },
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    elevation: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 8,
    borderRadius: 20,
  },
  imageContainer: {
    position: "relative",
  },

  favoriteIcon: {
    fontSize: 18,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#b0b0b0",
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
});
