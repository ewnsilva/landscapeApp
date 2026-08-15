export interface Category {
  id: string;
  code: string;
  name: string;
  description: string;
}

export type CategoryCode =
  | "ADVENTURE"
  | "BEACH"
  | "CULTURE"
  | "GASTRONOMY"
  | "NATURE"
  | "URBAN"
  | "LUXURY"
  | "SHOPPING";

export interface TouristAttraction {
  id: string;
  name: string;
  description: string;
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
  description: string;
  categories: Category[];
  touristAttractions: TouristAttraction[];
  relatedCitiesIds: string[];
  location: Location;
}
