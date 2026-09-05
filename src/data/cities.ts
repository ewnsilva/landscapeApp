import { categories } from "./categories";
import { City } from "./types";

export const cities: City[] = [
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brasil",
    coverImage: require("./images/rio-de-janeiro.png"),
    description: {
      en: "Rio de Janeiro, the Marvelous City, is world-famous for its iconic beaches, mountains, and unforgettable landscapes.",
      pt: "Rio de Janeiro, a Cidade Maravilhosa, é mundialmente famosa por suas praias icônicas, montanhas e paisagens inesquecíveis.",
      es: "Río de Janeiro, la Ciudad Maravillosa, es mundialmente famosa por sus playas icónicas, montañas y paisajes inolvidables.",
    },
    categories: [categories[2], categories[3], categories[1]],

    touristAttractions: [
      {
        id: "rio1",
        name: { en: "Christ the Redeemer", pt: "Cristo Redentor", es: "Cristo Redentor" },
        description: {
          en: "One of the Seven Wonders of the Modern World and a symbol of Brazil.",
          pt: "Uma das Sete Maravilhas do Mundo Moderno e símbolo do Brasil.",
          es: "Una de las Siete Maravillas del Mundo Moderno y símbolo de Brasil.",
        },
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio2",
        name: { en: "Sugarloaf Mountain", pt: "Pão de Açúcar", es: "Pan de Azúcar" },
        description: {
          en: "One of the country's most famous mountains, with a panoramic view.",
          pt: "Uma das montanhas mais famosas do país, com vista panorâmica.",
          es: "Una de las montañas más famosas del país, con vista panorámica.",
        },
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio3",
        name: { en: "Copacabana Beach", pt: "Praia de Copacabana", es: "Playa de Copacabana" },
        description: {
          en: "One of the most famous beaches in the world.",
          pt: "Uma das praias mais famosas do mundo.",
          es: "Una de las playas más famosas del mundo.",
        },
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio4",
        name: { en: "Botanical Garden", pt: "Jardim Botânico", es: "Jardín Botánico" },
        description: {
          en: "One of the largest and oldest botanical gardens in Brazil.",
          pt: "Um dos maiores e mais antigos jardins botânicos do Brasil.",
          es: "Uno de los jardines botánicos más grandes y antiguos de Brasil.",
        },
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
    description: {
      en: "Tokyo blends age-old tradition with cutting-edge technology and a fascinating culture.",
      pt: "Tóquio combina tradição milenar com tecnologia de ponta e uma cultura fascinante.",
      es: "Tokio combina tradición milenaria con tecnología de punta y una cultura fascinante.",
    },
    categories: [categories[1], categories[4], categories[5]], // Urbano, Cultura, Aventura

    touristAttractions: [
      {
        id: "tokyo1",
        name: { en: "Senso-ji Temple", pt: "Templo Senso-ji", es: "Templo Senso-ji" },
        description: {
          en: "Tokyo's oldest temple and one of the most visited in Japan.",
          pt: "O templo mais antigo de Tóquio e um dos mais visitados do Japão.",
          es: "El templo más antiguo de Tokio y uno de los más visitados de Japón.",
        },
        cityId: "tokyo",
      },
      {
        id: "tokyo2",
        name: { en: "Shibuya Crossing", pt: "Cruzamento de Shibuya", es: "Cruce de Shibuya" },
        description: {
          en: "The most famous pedestrian crossing in the world.",
          pt: "O cruzamento de pedestres mais famoso do mundo.",
          es: "El cruce peatonal más famoso del mundo.",
        },
        cityId: "tokyo",
      },
      {
        id: "tokyo3",
        name: { en: "Tokyo Tower", pt: "Torre de Tóquio", es: "Torre de Tokio" },
        description: {
          en: "One of the city's main tourist attractions.",
          pt: "Uma das principais atrações turísticas da cidade.",
          es: "Una de las principales atracciones turísticas de la ciudad.",
        },
        cityId: "tokyo",
      },
      {
        id: "tokyo4",
        name: { en: "Akihabara", pt: "Akihabara", es: "Akihabara" },
        description: {
          en: "A paradise for fans of technology, games, and anime.",
          pt: "O paraíso dos amantes de tecnologia, games e animes.",
          es: "Un paraíso para los amantes de la tecnología, los videojuegos y el anime.",
        },
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
    description: {
      en: "The City of Light enchants with its architecture, cuisine, and history.",
      pt: "A Cidade Luz encanta com sua arquitetura, gastronomia e história.",
      es: "La Ciudad de la Luz encanta con su arquitectura, gastronomía e historia.",
    },
    categories: [categories[1], categories[4]],

    touristAttractions: [
      {
        id: "paris1",
        name: { en: "Eiffel Tower", pt: "Torre Eiffel", es: "Torre Eiffel" },
        description: {
          en: "France's greatest symbol.",
          pt: "O maior símbolo da França.",
          es: "El mayor símbolo de Francia.",
        },
        cityId: "paris",
      },
      {
        id: "paris2",
        name: { en: "Louvre Museum", pt: "Museu do Louvre", es: "Museo del Louvre" },
        description: {
          en: "The most visited museum in the world.",
          pt: "O museu mais visitado do mundo.",
          es: "El museo más visitado del mundo.",
        },
        cityId: "paris",
      },
      {
        id: "paris3",
        name: { en: "Arc de Triomphe", pt: "Arco do Triunfo", es: "Arco del Triunfo" },
        description: {
          en: "A historic monument located on the Champs-Élysées.",
          pt: "Monumento histórico localizado na Champs-Élysées.",
          es: "Monumento histórico ubicado en los Campos Elíseos.",
        },
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
    description: {
      en: "Bali is known for its paradisiacal beaches, temples, and lush nature.",
      pt: "Bali é conhecida por suas praias paradisíacas, templos e natureza exuberante.",
      es: "Bali es conocida por sus playas paradisíacas, templos y exuberante naturaleza.",
    },
    categories: [categories[2], categories[3], categories[5]],

    touristAttractions: [
      {
        id: "bali1",
        name: { en: "Uluwatu Temple", pt: "Templo Uluwatu", es: "Templo de Uluwatu" },
        description: {
          en: "A temple built atop a cliff.",
          pt: "Templo construído sobre um penhasco.",
          es: "Templo construido sobre un acantilado.",
        },
        cityId: "bali",
      },
      {
        id: "bali2",
        name: { en: "Monkey Forest", pt: "Floresta dos Macacos", es: "Bosque de los Monos" },
        description: {
          en: "A nature reserve home to hundreds of monkeys.",
          pt: "Reserva natural com centenas de macacos.",
          es: "Reserva natural con cientos de monos.",
        },
        cityId: "bali",
      },
      {
        id: "bali3",
        name: { en: "Kuta Beach", pt: "Praia de Kuta", es: "Playa de Kuta" },
        description: {
          en: "A beach famous among surfers.",
          pt: "Praia famosa para surfistas.",
          es: "Playa famosa entre los surfistas.",
        },
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
    description: {
      en: "Cancún is famous for its crystal-clear waters and luxurious resorts.",
      pt: "Cancún é famosa por suas águas cristalinas e resorts luxuosos.",
      es: "Cancún es famosa por sus aguas cristalinas y resorts de lujo.",
    },
    categories: [categories[2], categories[5]],

    touristAttractions: [
      {
        id: "cancun1",
        name: { en: "Playa Delfines", pt: "Playa Delfines", es: "Playa Delfines" },
        description: {
          en: "One of the most beautiful beaches in Cancún.",
          pt: "Uma das praias mais bonitas de Cancún.",
          es: "Una de las playas más bonitas de Cancún.",
        },
        cityId: "cancun",
      },
      {
        id: "cancun2",
        name: { en: "Underwater Museum", pt: "Museu Subaquático", es: "Museo Subacuático" },
        description: {
          en: "A museum featuring submerged sculptures.",
          pt: "Museu com esculturas submersas.",
          es: "Museo con esculturas sumergidas.",
        },
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
    description: {
      en: "Krabi is one of Thailand's most paradisiacal destinations.",
      pt: "Krabi é um dos destinos mais paradisíacos da Tailândia.",
      es: "Krabi es uno de los destinos más paradisíacos de Tailandia.",
    },
    categories: [categories[2], categories[3], categories[5]],

    touristAttractions: [
      {
        id: "krabi1",
        name: { en: "Railay Beach", pt: "Praia de Railay", es: "Playa de Railay" },
        description: {
          en: "A beach surrounded by impressive limestone cliffs.",
          pt: "Praia cercada por falésias impressionantes.",
          es: "Playa rodeada de imponentes acantilados de piedra caliza.",
        },
        cityId: "krabi",
      },
      {
        id: "krabi2",
        name: {
          en: "Tiger Cave Temple",
          pt: "Templo da Caverna do Tigre",
          es: "Templo de la Cueva del Tigre",
        },
        description: {
          en: "A temple famous for its panoramic view.",
          pt: "Templo famoso por sua vista panorâmica.",
          es: "Templo famoso por su vista panorámica.",
        },
        cityId: "krabi",
      },
    ],

    relatedCitiesIds: ["bali", "cancun"],

    location: {
      latitude: 8.0863,
      longitude: 98.9063,
    },
  },
  {
    id: "seoul",
    name: "Seul",
    country: "Coreia do Sul",
    coverImage: require("./images/seoul.png"),
    description: {
      en: "Seoul blends historic palaces, technology, and vibrant neighborhoods in a metropolis full of contrasts.",
      pt: "Seul mistura palácios históricos, tecnologia e bairros vibrantes em uma metrópole cheia de contrastes.",
      es: "Seúl combina palacios históricos, tecnología y barrios vibrantes en una metrópolis llena de contrastes.",
    },
    categories: [categories[1], categories[4], categories[5]],
    touristAttractions: [
      {
        id: "seoul1",
        name: {
          en: "Gyeongbokgung Palace",
          pt: "Palácio Gyeongbokgung",
          es: "Palacio Gyeongbokgung",
        },
        description: {
          en: "The main royal palace of the Joseon dynasty.",
          pt: "O principal palácio real da dinastia Joseon.",
          es: "El principal palacio real de la dinastía Joseon.",
        },
        cityId: "seoul",
      },
      {
        id: "seoul2",
        name: { en: "N Seoul Tower", pt: "Torre N Seoul", es: "Torre N Seoul" },
        description: {
          en: "A viewpoint offering a panoramic view of the city.",
          pt: "Mirante com uma vista panorâmica da cidade.",
          es: "Mirador con una vista panorámica de la ciudad.",
        },
        cityId: "seoul",
      },
    ],
    relatedCitiesIds: ["tokyo", "singapore", "bangkok"],
    location: { latitude: 37.5665, longitude: 126.978 },
  },
  {
    id: "singapore",
    name: "Singapura",
    country: "Singapura",
    coverImage: require("./images/singapore.png"),
    description: {
      en: "Singapore brings together futuristic architecture, lush gardens, and multicultural cuisine.",
      pt: "Singapura reúne arquitetura futurista, jardins exuberantes e uma gastronomia multicultural.",
      es: "Singapur reúne arquitectura futurista, jardines exuberantes y una gastronomía multicultural.",
    },
    categories: [categories[1], categories[3], categories[5]],
    touristAttractions: [
      {
        id: "singapore1",
        name: { en: "Gardens by the Bay", pt: "Gardens by the Bay", es: "Gardens by the Bay" },
        description: {
          en: "Iconic gardens featuring the famous Supertrees.",
          pt: "Jardins icônicos com as famosas Supertrees.",
          es: "Jardines icónicos con los famosos Supertrees.",
        },
        cityId: "singapore",
      },
      {
        id: "singapore2",
        name: { en: "Marina Bay", pt: "Marina Bay", es: "Marina Bay" },
        description: {
          en: "A bay featuring one of Asia's most iconic skylines.",
          pt: "Baía com uma das paisagens urbanas mais conhecidas da Ásia.",
          es: "Bahía con uno de los paisajes urbanos más conocidos de Asia.",
        },
        cityId: "singapore",
      },
    ],
    relatedCitiesIds: ["seoul", "tokyo", "bangkok"],
    location: { latitude: 1.3521, longitude: 103.8198 },
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Tailândia",
    coverImage: require("./images/bangkok.png"),
    description: {
      en: "Bangkok is known for its temples, markets, nightlife, and distinctive cuisine.",
      pt: "Bangkok é conhecida por seus templos, mercados, vida noturna e culinária marcante.",
      es: "Bangkok es conocida por sus templos, mercados, vida nocturna y gastronomía característica.",
    },
    categories: [categories[1], categories[4], categories[5]],
    touristAttractions: [
      {
        id: "bangkok1",
        name: { en: "Grand Palace", pt: "Grande Palácio", es: "Gran Palacio" },
        description: {
          en: "A historic complex that once housed the Thai royal family.",
          pt: "Complexo histórico que abrigou a família real tailandesa.",
          es: "Complejo histórico que albergó a la familia real tailandesa.",
        },
        cityId: "bangkok",
      },
      {
        id: "bangkok2",
        name: { en: "Wat Arun", pt: "Wat Arun", es: "Wat Arun" },
        description: {
          en: "A temple on the banks of the Chao Phraya River.",
          pt: "Templo à margem do rio Chao Phraya.",
          es: "Templo a orillas del río Chao Phraya.",
        },
        cityId: "bangkok",
      },
    ],
    relatedCitiesIds: ["krabi", "singapore", "seoul"],
    location: { latitude: 13.7563, longitude: 100.5018 },
  },
  {
    id: "rome",
    name: "Roma",
    country: "Itália",
    coverImage: require("./images/rome.png"),
    description: {
      en: "Rome preserves ruins from antiquity, charming squares, and an unmistakable culinary culture.",
      pt: "Roma preserva ruínas da Antiguidade, praças charmosas e uma cultura gastronômica inconfundível.",
      es: "Roma conserva ruinas de la Antigüedad, plazas encantadoras y una cultura gastronómica inconfundible.",
    },
    categories: [categories[1], categories[4]],
    touristAttractions: [
      {
        id: "rome1",
        name: { en: "Colosseum", pt: "Coliseu", es: "Coliseo" },
        description: {
          en: "A Roman amphitheater and one of the city's greatest symbols.",
          pt: "Anfiteatro romano e um dos maiores símbolos da cidade.",
          es: "Anfiteatro romano y uno de los mayores símbolos de la ciudad.",
        },
        cityId: "rome",
      },
      {
        id: "rome2",
        name: { en: "Trevi Fountain", pt: "Fontana di Trevi", es: "Fontana di Trevi" },
        description: {
          en: "A famous Baroque fountain in the historic center.",
          pt: "Fonte barroca famosa no centro histórico.",
          es: "Famosa fuente barroca en el centro histórico.",
        },
        cityId: "rome",
      },
    ],
    relatedCitiesIds: ["paris", "london"],
    location: { latitude: 41.9028, longitude: 12.4964 },
  },
  {
    id: "london",
    name: "Londres",
    country: "Reino Unido",
    coverImage: require("./images/london.png"),
    description: {
      en: "London combines tradition, world-renowned museums, and a diverse cultural scene.",
      pt: "Londres combina tradição, museus reconhecidos mundialmente e uma cena cultural diversa.",
      es: "Londres combina tradición, museos de renombre mundial y una escena cultural diversa.",
    },
    categories: [categories[1], categories[4]],
    touristAttractions: [
      {
        id: "london1",
        name: { en: "Tower Bridge", pt: "Tower Bridge", es: "Tower Bridge" },
        description: {
          en: "A historic bridge over the River Thames.",
          pt: "Ponte histórica sobre o rio Tâmisa.",
          es: "Puente histórico sobre el río Támesis.",
        },
        cityId: "london",
      },
      {
        id: "london2",
        name: { en: "British Museum", pt: "British Museum", es: "Museo Británico" },
        description: {
          en: "A museum with a vast collection of world history and cultures.",
          pt: "Museu com um vasto acervo de história e culturas do mundo.",
          es: "Museo con una vasta colección de historia y culturas del mundo.",
        },
        cityId: "london",
      },
    ],
    relatedCitiesIds: ["paris", "rome"],
    location: { latitude: 51.5072, longitude: -0.1276 },
  },
  {
    id: "cape-town",
    name: "Cidade do Cabo",
    country: "África do Sul",
    coverImage: require("./images/cape-town.png"),
    description: {
      en: "Cape Town enchants with Table Mountain, award-winning beaches, and unique wildlife.",
      pt: "Cidade do Cabo encanta com a Table Mountain, praias premiadas e uma vida selvagem única.",
      es: "Ciudad del Cabo encanta con la Montaña de la Mesa, playas premiadas y una vida silvestre única.",
    },
    categories: [categories[3], categories[5], categories[2]],
    touristAttractions: [
      {
        id: "capetown1",
        name: { en: "Table Mountain", pt: "Table Mountain", es: "Montaña de la Mesa" },
        description: {
          en: "An iconic mountain with panoramic views over the city and ocean.",
          pt: "Montanha icônica com vista panorâmica sobre a cidade e o oceano.",
          es: "Montaña icónica con vista panorámica sobre la ciudad y el océano.",
        },
        cityId: "cape-town",
      },
      {
        id: "capetown2",
        name: {
          en: "Cape of Good Hope",
          pt: "Cabo da Boa Esperança",
          es: "Cabo de Buena Esperanza",
        },
        description: {
          en: "A nature reserve at the tip of the Cape Peninsula.",
          pt: "Reserva natural na ponta da Península do Cabo.",
          es: "Reserva natural en la punta de la Península del Cabo.",
        },
        cityId: "cape-town",
      },
    ],
    relatedCitiesIds: ["bali", "krabi"],
    location: { latitude: -33.9249, longitude: 18.4241 },
  },
  {
    id: "new-york",
    name: "Nova York",
    country: "Estados Unidos",
    coverImage: require("./images/new-york.png"),
    description: {
      en: "New York is a vibrant metropolis known for its skyscrapers, museums, and intense cultural life.",
      pt: "Nova York é uma metrópole vibrante conhecida por seus arranha-céus, museus e vida cultural intensa.",
      es: "Nueva York es una metrópolis vibrante conocida por sus rascacielos, museos y su intensa vida cultural.",
    },
    categories: [categories[1], categories[4]],
    touristAttractions: [
      {
        id: "newyork1",
        name: { en: "Statue of Liberty", pt: "Estátua da Liberdade", es: "Estatua de la Libertad" },
        description: {
          en: "A symbol of freedom and one of the world's most famous monuments.",
          pt: "Símbolo de liberdade e um dos monumentos mais famosos do mundo.",
          es: "Símbolo de libertad y uno de los monumentos más famosos del mundo.",
        },
        cityId: "new-york",
      },
      {
        id: "newyork2",
        name: { en: "Central Park", pt: "Central Park", es: "Central Park" },
        description: {
          en: "One of the most famous urban parks on the planet.",
          pt: "Um dos parques urbanos mais conhecidos do planeta.",
          es: "Uno de los parques urbanos más conocidos del planeta.",
        },
        cityId: "new-york",
      },
      {
        id: "newyork3",
        name: { en: "Times Square", pt: "Times Square", es: "Times Square" },
        description: {
          en: "An iconic crossroads filled with lights and Broadway theaters.",
          pt: "Cruzamento icônico repleto de luzes e teatros da Broadway.",
          es: "Cruce icónico repleto de luces y teatros de Broadway.",
        },
        cityId: "new-york",
      },
    ],
    relatedCitiesIds: ["london", "paris"],
    location: { latitude: 40.7128, longitude: -74.006 },
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    coverImage: require("./images/machu-picchu.png"),
    description: {
      en: "Machu Picchu is an Inca citadel surrounded by mountains, one of the Seven Wonders of the Modern World.",
      pt: "Machu Picchu é uma cidadela inca cercada por montanhas, uma das Sete Maravilhas do Mundo Moderno.",
      es: "Machu Picchu es una ciudadela inca rodeada de montañas, una de las Siete Maravillas del Mundo Moderno.",
    },
    categories: [categories[3], categories[4], categories[5]],
    touristAttractions: [
      {
        id: "machupicchu1",
        name: { en: "Inca Citadel", pt: "Cidadela Inca", es: "Ciudadela Inca" },
        description: {
          en: "Historic ruins preserved amid the Andes mountain range.",
          pt: "Ruínas históricas preservadas em meio à Cordilheira dos Andes.",
          es: "Ruinas históricas preservadas en medio de la Cordillera de los Andes.",
        },
        cityId: "machu-picchu",
      },
      {
        id: "machupicchu2",
        name: { en: "Huayna Picchu", pt: "Huayna Picchu", es: "Huayna Picchu" },
        description: {
          en: "A mountain with a trail and a privileged view over the citadel.",
          pt: "Montanha com trilha e vista privilegiada sobre a cidadela.",
          es: "Montaña con sendero y vista privilegiada sobre la ciudadela.",
        },
        cityId: "machu-picchu",
      },
    ],
    relatedCitiesIds: ["rio-de-janeiro", "cancun"],
    location: { latitude: -13.1631, longitude: -72.545 },
  },
];
