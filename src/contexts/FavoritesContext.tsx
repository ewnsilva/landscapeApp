import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "@landscape_app:favorites";

interface FavoritesContextData {
  favorites: string[];
  isFavorite: (cityId: string) => boolean;
  toggleFavorite: (cityId: string) => Promise<void>;
  isLoading: boolean;
}

const FavoritesContext = createContext<FavoritesContextData | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos do storage:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFavorites();
  }, []);

  const isFavorite = (cityId: string) => {
    return favorites?.includes(cityId) ?? false;
  };

  const toggleFavorite = async (cityId: string) => {
    try {
      let updatedFavorites: string[];

      if (favorites.includes(cityId)) {
        updatedFavorites = favorites.filter((id) => id !== cityId);
      } else {
        updatedFavorites = [...favorites, cityId];
      }

      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Erro ao salvar favorito no storage:", error);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, isLoading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider");
  }

  return context;
}
