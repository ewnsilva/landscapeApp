import { renderHook, act, waitFor } from "@testing-library/react-native";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { useCityFilter } from "@/hooks/useCityFilter";

test("combina filtro de texto e categoria", async () => {
  const { result } = renderHook(() => useCityFilter(), { wrapper: FavoritesProvider });
  await waitFor(() => expect(result.current.categories.length).toBeGreaterThan(0));
  act(() => result.current.setSearchQuery("Brasil"));
  expect(result.current.filteredCities.map((city) => city.id)).toEqual(["rio-de-janeiro"]);
  act(() => result.current.handleSelectCategory("BEACH"));
  expect(result.current.filteredCities.map((city) => city.id)).toEqual(["rio-de-janeiro"]);
});
