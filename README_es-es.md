<div align="right">
  <a href="./README.md">English</a> | <a href="./README_pt-br.md">Português</a> | <strong>Español</strong>
</div>

# 14ndscapes — Plataforma Global de Descubrimiento de Paisajes

**14ndscapes** es una aplicación móvil de alto rendimiento diseñada para el descubrimiento curado de destinos turísticos y paisajes naturales de renombre mundial. Construida con React Native y Expo Router, la aplicación combina patrones modernos de diseño UX/UI, navegación reactiva dinámica y soporte multilingüe nativo para ofrecer una experiencia móvil fluida, accesible y rápida.

---

## 🌟 Características Destacadas & Propuesta de Valor
- **Experiencia Curada (14 Destinos Emblemáticos):** Enfocada en un catálogo altamente selectivo y de gran valor que presenta 14 de los lugares más impresionantes del mundo a través de una interfaz visual inmersiva.
- **Soporte Multilingüe Nativo:** Internacionalización nativa completa para **Inglés (predeterminado)**, **Portugués** y **Español**, ofreciendo accesibilidad global inmediata y cambio de idioma en tiempo real.
- **Flujo de Bienvenida Inteligente:** Experiencia de bienvenida en el primer inicio que presenta la propuesta de valor de la aplicación, con el estado de interacción del usuario gestionado mediante persistencia local.
- **Arquitectura Offline-First:** El catálogo principal de destinos, la matriz de filtros por categoría y las atracciones localizadas se cargan al instante, sin dependencia de latencia de red.
- **Motor de Favoritos Persistente:** Sistema de marcadores basado en estado que permite a los usuarios guardar sus destinos preferidos incluso después de reiniciar la aplicación.

---

## 🏗️ Arquitectura & Decisiones de Ingeniería

```text
┌─────────────────────────────────────────────────────────────┐
│                      14ndscapes App                         │
├──────────────────────────────┬──────────────────────────────┤
│ Capa de UI (Expo Router)     │ Capa de Estado y Contexto    │
│ • Enrutamiento por Archivos  │ • FavoritesContext           │
│ • Encabezado Nativo de Nav.  │ • Motor i18next              │
├──────────────────────────────┼──────────────────────────────┤
│ Rendimiento y UX             │ Capa de Persistencia         │
│ • FlatList Memoizada         │ • Motor AsyncStorage         │
│ • Motor expo-image           │ • Datos Locales Dinámicos    │
└──────────────────────────────┴──────────────────────────────┘
```

### Estrategias Técnicas Clave
- **Enrutamiento Basado en Archivos (Expo Router):** Enrutamiento estrictamente tipado con TypeScript aprovechando la navegación Stack nativa para transiciones de pantalla fluidas y personalización precisa del encabezado.
- **Renderizado Optimizado de Imágenes:** Implementación de expo-image para almacenamiento en caché de memoria, persistencia automática en disco y transiciones suaves entre imágenes.
- **Rendimiento de Lista Virtualizada:** Configuración altamente optimizada de FlatList utilizando memoización de React (useCallback, React.memo) y ajustes finos de virtualización (windowSize, maxToRenderPerBatch, removeClippedSubviews) para mantener 60 FPS constantes durante el desplazamiento.
- **Separación de Responsabilidades:** Lógica de negocio encapsulada en custom hooks limpios (useCityFilter), desacoplando la representación de la interfaz del manejo de estado.
- **Estrategia de Datos Localizados:** Motor de internacionalización desacoplado que combina i18next con utilidades de resolución de datos (getLocalizedCity) para entregar objetos traducidos dinámicamente.


📂 Estructura del Proyecto

```text
src/
├── app/                  # Páginas y diseños basados en archivos de Expo Router
│   ├── _layout.tsx       # Diseño raíz, proveedores globales y opciones de Stack
│   ├── index.tsx         # Pantalla principal con filtro de categorías y FlatList
│   └── city/[id].tsx     # Ruta dinámica para detalles del destino
├── components/           # Componentes de UI reutilizables y memoizados
│   ├── CityItem.tsx      # Componente de tarjeta de destino
│   ├── CategoryFilter.ts # Contenedor horizontal de chips de filtro
│   └── WelcomeModal.tsx  # Modal de bienvenida de primer uso
├── contexts/             # Gestión de estado global
│   └── FavoritesContext  # Estado de marcadores y controlador de AsyncStorage
├── hooks/                # Custom hooks de lógica de negocio
│   └── useCityFilter.ts  # Lógica de filtrado y búsqueda
├── i18n/                 # Diccionarios de traducción (en, pt, es) y configuración
├── utils/                # Utilidades de resolución de datos y análisis de cadenas
└── data/                 # Contratos de datos estáticos, tipos y recursos
```

## 🚀 Cómo Empezar

### Requisitos Previos
- Node.js (v18.0.0 o superior)
- npm, pnpm o yarn
- Aplicación Expo Go instalada en tu dispositivo físico o un emulador de Android/iOS

### Instalación

Clona el repositorio:

```bash
git clone [https://github.com/ewnsilva/14ndscapes.git](https://github.com/ewnsilva/14ndscapes.git)
cd 14ndscapes
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo de Expo:

```bash
npx expo start
```

Escanea el código QR con Expo Go (Android) o la aplicación de Cámara (iOS) para abrir el proyecto.

## 🛠️ Tecnologías Utilizadas
- **Framework Principal**: React Native / Expo SDK
- **Navegación**: Expo Router (Stack Navigation)
- **Lenguaje**: TypeScript (Modo Estricto)
- **Localización**: i18next / react-i18next / expo-localization
- **Almacenamiento Local**: @react-native-async-storage/async-storage
- **Medios y UI**: expo-image, react-native-safe-area-context

## 🗺️ Roadmap del Producto
- [ ] Integración con API de Clima en Tiempo Real (TanStack Query + OpenWeatherMap API)
- [ ] Mapas Interactivos con Geolocalización (react-native-maps)
- [ ] Suite de Pruebas Automatizadas (Vitest + React Native Testing Library)
- [ ] Pipeline de CI/CD mediante GitHub Actions
