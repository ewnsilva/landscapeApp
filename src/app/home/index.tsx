// src/app/index.tsx
import CategoryFilter from "@/components/CategoryFilter";
import CityItem from "@/components/CityItem";
import { City } from "@/data/types";
import { useCityFilter } from "@/hooks/useCityFilter";
import { useCallback } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {
    categories,
    selectedCategory,
    handleSelectCategory,
    filteredCities,
    searchQuery,
    setSearchQuery,
  } = useCityFilter();

  const renderCityItem = useCallback(({ item }: { item: City }) => <CityItem city={item} />, []);

  const keyExtractor = useCallback((item: City) => item.id, []);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <TextInput
        accessibilityLabel="Buscar cidades"
        autoCapitalize="words"
        clearButtonMode="while-editing"
        onChangeText={setSearchQuery}
        placeholder="Buscar por cidade ou país"
        placeholderTextColor="#8a8a8a"
        returnKeyType="search"
        style={styles.searchInput}
        value={searchQuery}
      />

      <FlatList
        data={filteredCities}
        renderItem={renderCityItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {selectedCategory === "FAVORITE"
                ? "Você ainda não favoritou nenhuma cidade."
                : "Nenhuma cidade encontrada nessa categoria."}
            </Text>
          </View>
        )}
        initialNumToRender={6}
        maxToRenderPerBatch={8}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  searchInput: {
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#3d3d3d",
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
    color: "#ffffff",
    fontSize: 16,
  },
  separator: {
    height: 12,
  },
  emptyContainer: {
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#a0a0a0",
    fontSize: 16,
    textAlign: "center",
  },
});
