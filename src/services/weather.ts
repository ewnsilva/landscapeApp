import axios from "axios";

interface OpenMeteoResponse {
  current: {
    is_day: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    weather_code: number;
  };
}

export interface Weather {
  humidity: number;
  isDay: boolean;
  temperature: number;
  weatherCode: number;
}

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  timeout: 10_000,
});

export async function getCurrentWeather(latitude: number, longitude: number): Promise<Weather> {
  const { data } = await weatherApi.get<OpenMeteoResponse>("/forecast", {
    params: {
      current: "temperature_2m,relative_humidity_2m,weather_code,is_day",
      latitude,
      longitude,
      timezone: "auto",
    },
  });

  return {
    humidity: data.current.relative_humidity_2m,
    isDay: data.current.is_day === 1,
    temperature: data.current.temperature_2m,
    weatherCode: data.current.weather_code,
  };
}

export function getWeatherPresentation(weatherCode: number, isDay: boolean) {
  if (weatherCode === 0) return { icon: isDay ? "☀️" : "🌙", labelKey: "weather.clearSky" };
  if ([1, 2, 3].includes(weatherCode))
    return { icon: isDay ? "🌤️" : "☁️", labelKey: "weather.partlyCloudy" };
  if ([45, 48].includes(weatherCode)) return { icon: "🌫️", labelKey: "weather.fog" };
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode))
    return { icon: "🌧️", labelKey: "weather.rain" };
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode))
    return { icon: "❄️", labelKey: "weather.snow" };
  if ([95, 96, 99].includes(weatherCode)) return { icon: "⛈️", labelKey: "weather.storm" };
  return { icon: "🌡️", labelKey: "weather.current" };
}
