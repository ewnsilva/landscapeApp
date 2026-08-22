import AsyncStorage from "@react-native-async-storage/async-storage";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Pressable, Text } from "react-native";
import { FavoritesProvider, useFavorites } from "@/contexts/FavoritesContext";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

function Probe() {
  const { favorites, toggleFavorite } = useFavorites();
  return (
    <>
      <Text>{favorites.join(",")}</Text>
      <Pressable accessibilityRole="button" onPress={() => toggleFavorite("rio-de-janeiro")}>
        <Text>Favoritar</Text>
      </Pressable>
    </>
  );
}

test("persiste favoritos no AsyncStorage", async () => {
  jest.mocked(AsyncStorage.getItem).mockResolvedValue(null);
  const screen = render(
    <FavoritesProvider>
      <Probe />
    </FavoritesProvider>,
  );
  fireEvent.press(screen.getByRole("button"));
  await waitFor(() =>
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "@landscape_app:favorites",
      JSON.stringify(["rio-de-janeiro"]),
    ),
  );
});
