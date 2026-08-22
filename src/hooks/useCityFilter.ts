// src/hooks/useCityFilter.ts
import { useFavorites } from "@/contexts/FavoritesContext";
import { categories } from "@/data/categories";
import { cities } from "@/data/cities";
import { City } from "@/data/types";
import { useMemo, useState } from "react";

export function useCityFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites } = useFavorites();

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const filteredCities = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("pt-BR");

    return cities.filter((city: City) => {
      const matchesSearch =
        !normalizedQuery ||
        city.name.toLocaleLowerCase("pt-BR").includes(normalizedQuery) ||
        city.country.toLocaleLowerCase("pt-BR").includes(normalizedQuery);

      if (!matchesSearch) return false;
      if (!selectedCategory) return true;
      if (selectedCategory === "FAVORITE") {
        return favorites.includes(city.id);
      }

      return city.categories.some((cat) => {
        if (typeof cat === "object" && cat !== null) {
          return (
            cat.id === selectedCategory ||
            cat.code === selectedCategory ||
            cat.name === selectedCategory
          );
        }

        if (typeof cat === "string") {
          return cat === selectedCategory;
        }

        return false;
      });
    });
  }, [searchQuery, selectedCategory, favorites]);

  return {
    categories,
    selectedCategory,
    searchQuery,
    setSearchQuery,
    handleSelectCategory,
    filteredCities,
  };
}
