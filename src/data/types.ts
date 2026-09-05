export interface Category {
  id: string;
  code: string;
  name: string;
  description: string;
}

export type CategoryCode =
  "ADVENTURE" | "BEACH" | "CULTURE" | "GASTRONOMY" | "NATURE" | "URBAN" | "LUXURY" | "SHOPPING";

export type LocalizedString = {
  en: string;
  pt: string;
  es: string;
};

export interface TouristAttraction {
  id: string;
  name: LocalizedString;
  description?: LocalizedString;
  cityId: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface City {
  id: string;
  name: string;
  country: string;
  coverImage: any;
  description: LocalizedString;
  categories: Category[];
  touristAttractions: TouristAttraction[];
  relatedCitiesIds: string[];
  location: Location;
}

export interface LocalizedTouristAttraction extends Omit<
  TouristAttraction,
  "name" | "description"
> {
  name: string;
  description?: string;
}

export interface LocalizedCity extends Omit<City, "description" | "touristAttractions"> {
  description: string;
  touristAttractions: LocalizedTouristAttraction[];
}
