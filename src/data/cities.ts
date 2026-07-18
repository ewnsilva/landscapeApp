import { categories } from "./categories";
import { City } from "./types";

export const cities: City[] = [
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brasil",
    coverImage: require("./images/rio-de-janeiro.png"),
    description:
      "Rio de Janeiro, a Cidade Maravilhosa, é mundialmente famosa por suas praias icônicas, montanhas e paisagens inesquecíveis.",
    categories: [categories[2], categories[3], categories[1]],

    touristAttractions: [
      {
        id: "rio1",
        name: "Cristo Redentor",
        description:
          "Uma das Sete Maravilhas do Mundo Moderno e símbolo do Brasil.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio2",
        name: "Pão de Açúcar",
        description:
          "Uma das montanhas mais famosas do país, com vista panorâmica.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio3",
        name: "Praia de Copacabana",
        description: "Uma das praias mais famosas do mundo.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio4",
        name: "Jardim Botânico",
        description:
          "Um dos maiores e mais antigos jardins botânicos do Brasil.",
        cityId: "rio-de-janeiro",
      },
    ],

    relatedCitiesIds: ["bali", "cancun", "krabi"],

    location: {
      latitude: -22.9068,
      longitude: -43.1729,
    },
  },

  {
    id: "tokyo",
    name: "Tóquio",
    country: "Japão",
    coverImage: require("./images/tokyo.png"),
    description:
      "Tóquio combina tradição milenar com tecnologia de ponta e uma cultura fascinante.",
    categories: [categories[1], categories[4], categories[5]], // Urbano, Cultura, Aventura

    touristAttractions: [
      {
        id: "tokyo1",
        name: "Templo Senso-ji",
        description:
          "O templo mais antigo de Tóquio e um dos mais visitados do Japão.",
        cityId: "tokyo",
      },
      {
        id: "tokyo2",
        name: "Shibuya Crossing",
        description: "O cruzamento de pedestres mais famoso do mundo.",
        cityId: "tokyo",
      },
      {
        id: "tokyo3",
        name: "Tokyo Tower",
        description: "Uma das principais atrações turísticas da cidade.",
        cityId: "tokyo",
      },
      {
        id: "tokyo4",
        name: "Akihabara",
        description: "O paraíso dos amantes de tecnologia, games e animes.",
        cityId: "tokyo",
      },
    ],

    relatedCitiesIds: ["seoul", "singapore", "bangkok"],

    location: {
      latitude: 35.6762,
      longitude: 139.6503,
    },
  },

  {
    id: "paris",
    name: "Paris",
    country: "França",
    coverImage: require("./images/paris.png"),
    description:
      "A Cidade Luz encanta com sua arquitetura, gastronomia e história.",
    categories: [categories[1], categories[4]],

    touristAttractions: [
      {
        id: "paris1",
        name: "Torre Eiffel",
        description: "O maior símbolo da França.",
        cityId: "paris",
      },
      {
        id: "paris2",
        name: "Museu do Louvre",
        description: "O museu mais visitado do mundo.",
        cityId: "paris",
      },
      {
        id: "paris3",
        name: "Arco do Triunfo",
        description: "Monumento histórico localizado na Champs-Élysées.",
        cityId: "paris",
      },
    ],

    relatedCitiesIds: ["rome", "london"],

    location: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
  },

  {
    id: "bali",
    name: "Bali",
    country: "Indonésia",
    coverImage: require("./images/bali.png"),
    description:
      "Bali é conhecida por suas praias paradisíacas, templos e natureza exuberante.",
    categories: [categories[2], categories[3], categories[5]],

    touristAttractions: [
      {
        id: "bali1",
        name: "Templo Uluwatu",
        description: "Templo construído sobre um penhasco.",
        cityId: "bali",
      },
      {
        id: "bali2",
        name: "Floresta dos Macacos",
        description: "Reserva natural com centenas de macacos.",
        cityId: "bali",
      },
      {
        id: "bali3",
        name: "Praia de Kuta",
        description: "Praia famosa para surfistas.",
        cityId: "bali",
      },
    ],

    relatedCitiesIds: ["krabi", "cancun"],

    location: {
      latitude: -8.3405,
      longitude: 115.092,
    },
  },

  {
    id: "cancun",
    name: "Cancún",
    country: "México",
    coverImage: require("./images/cancun.png"),
    description:
      "Cancún é famosa por suas águas cristalinas e resorts luxuosos.",
    categories: [categories[2], categories[5]],

    touristAttractions: [
      {
        id: "cancun1",
        name: "Playa Delfines",
        description: "Uma das praias mais bonitas de Cancún.",
        cityId: "cancun",
      },
      {
        id: "cancun2",
        name: "Museu Subaquático",
        description: "Museu com esculturas submersas.",
        cityId: "cancun",
      },
    ],

    relatedCitiesIds: ["bali", "rio-de-janeiro"],

    location: {
      latitude: 21.1619,
      longitude: -86.8515,
    },
  },

  {
    id: "krabi",
    name: "Krabi",
    country: "Tailândia",
    coverImage: require("./images/krabi.png"),
    description: "Krabi é um dos destinos mais paradisíacos da Tailândia.",
    categories: [categories[2], categories[3], categories[5]],

    touristAttractions: [
      {
        id: "krabi1",
        name: "Railay Beach",
        description: "Praia cercada por falésias impressionantes.",
        cityId: "krabi",
      },
      {
        id: "krabi2",
        name: "Tiger Cave Temple",
        description: "Templo famoso por sua vista panorâmica.",
        cityId: "krabi",
      },
    ],

    relatedCitiesIds: ["bali", "cancun"],

    location: {
      latitude: 8.0863,
      longitude: 98.9063,
    },
  },
];
