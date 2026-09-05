import {
  City,
  LocalizedCity,
  LocalizedString,
  LocalizedTouristAttraction,
  TouristAttraction,
} from "@/data/types";
import { DEFAULT_LANGUAGE } from "@/i18n";

function resolveLocalizedString(value: LocalizedString, language: string): string {
  if (language in value) {
    return value[language as keyof LocalizedString];
  }

  return value[DEFAULT_LANGUAGE];
}

function getLocalizedAttraction(
  attraction: TouristAttraction,
  language: string,
): LocalizedTouristAttraction {
  return {
    ...attraction,
    name: resolveLocalizedString(attraction.name, language),
    description: attraction.description
      ? resolveLocalizedString(attraction.description, language)
      : undefined,
  };
}

export function getLocalizedCity(city: City, language: string): LocalizedCity {
  return {
    ...city,
    description: resolveLocalizedString(city.description, language),
    touristAttractions: city.touristAttractions.map((attraction) =>
      getLocalizedAttraction(attraction, language),
    ),
  };
}
