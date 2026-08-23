import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "@/services/weather";

export function useWeather(latitude: number, longitude: number) {
  return useQuery({
    queryFn: () => getCurrentWeather(latitude, longitude),
    queryKey: ["weather", latitude, longitude],
  });
}
