// src/components/CategoryFilter.tsx
import { Category } from "@/data/types";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryFilterProps {
  readonly categories: ReadonlyArray<Category>;
  readonly selectedCategory: string | null;
  readonly onSelectCategory: (categoryId: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: Readonly<CategoryFilterProps>) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.code || item.name}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const categoryIdentifier = item.id || item.code;
          const isSelected = selectedCategory === categoryIdentifier;

          return (
            <Pressable
              style={[styles.chip, isSelected && styles.chipSelected]}
              onPress={() => onSelectCategory(categoryIdentifier)}
            >
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  listContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
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
    fontSize: 14,
    fontWeight: "500",
  },
  chipTextSelected: {
    color: "#1b1b1b",
    fontWeight: "bold",
  },
});
