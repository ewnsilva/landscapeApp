import { fireEvent, render } from "@testing-library/react-native";
import CityItem from "@/components/CityItem";
import { cities } from "@/data/cities";

const mockToggleFavorite = jest.fn();
jest.mock("@/contexts/FavoritesContext", () => ({
  useFavorites: () => ({ isFavorite: () => false, toggleFavorite: mockToggleFavorite }),
}));
jest.mock("expo-router", () => ({ useRouter: () => ({ push: jest.fn() }) }));
jest.mock("expo-image", () => ({ Image: "Image" }));

test("aciona o favorito ao pressionar o botão do card", () => {
  const screen = render(<CityItem city={cities[0]} />);
  fireEvent.press(screen.getByLabelText("Favorite Rio de Janeiro"));
  expect(mockToggleFavorite).toHaveBeenCalledWith("rio-de-janeiro");
});
