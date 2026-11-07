<div align="right">
  <strong>English</strong> | <a href="./README_pt-br.md">Português</a> | <a href="./README_es-es.md">Español</a>
</div>

# 14ndscapes — Global Landscape Discovery Platform

**14ndscapes** is a high-performance mobile application engineered for the curated discovery of world-renowned travel destinations and natural landscapes. Built with React Native and Expo Router, the application combines modern UX/UI design patterns, dynamic reactive navigation, and native multilingual support to deliver a fluid, accessible, and fast mobile experience.

---

## 🌟 Product Highlights & Value Proposition

- **Curated Experience (14 Landmark Destinations):** Focused on a highly selective, high-value catalog featuring 14 of the world's most breathtaking locations presented through an immersive visual UI.
- **Seamless Multilingual Support:** Complete native internationalization for **English (default)**, **Portuguese**, and **Spanish**, providing immediate global accessibility and instant language switching.
- **Smart Onboarding Flow:** First-launch welcome experience introducing the app's value proposition, with user interaction states managed via local persistence.
- **Offline-First Architecture:** The core destination catalog, category filter matrix, and localized attractions load instantly without network latency dependencies.
- **Persistent Favorites Engine:** State-driven bookmarking system enabling users to save preferred destinations across app restarts.
- **External Maps & Sharing Support:** Direct integration to open destination locations in Google Maps and native destination sharing functionality for seamless collaboration.

---

## 🏗️ Architecture & Engineering Decisions

```text
┌─────────────────────────────────────────────────────────────┐
│ 14ndscapes App │
├──────────────────────────────┬──────────────────────────────┤
│ UI Layer (Expo Router v3) │ State & Context Layer │
│ • File-based Routing │ • FavoritesContext │
│ • Native Navigation Header │ • i18next Engine │
├──────────────────────────────┼──────────────────────────────┤
│ Performance & UX │ Persistence Layer │
│ • Memoized FlatList │ • AsyncStorage Engine │
│ • expo-image Engine │ • Dynamic Localized Data │
└──────────────────────────────┴──────────────────────────────┘
```

### Key Technical Strategies

- **File-Based Routing (Expo Router):** Strict TypeScript-typed file-based routing leveraging native Stack navigation for fluid screen transitions and precise header customization.
- **Optimized Image Rendering:** Implementation of `expo-image` for memory caching, automatic disk persistence, and cross-fading image transitions.
- **Virtualized List Performance:** Highly optimized `FlatList` configuration utilizing React memoization (`useCallback`, `React.memo`) and tuned virtualization settings (`windowSize`, `maxToRenderPerBatch`, `removeClippedSubviews`) to maintain a steady 60 FPS scroll performance.
- **Separation of Concerns:** Business logic encapsulated within clean custom hooks (`useCityFilter`), decoupling UI rendering from state manipulation.
- **Localized Data Strategy:** Decoupled internationalization engine pairing `i18next` with data-layer utility resolvers (`getLocalizedCity`) to yield language-resolved objects dynamically.

---

## 📂 Project Structure

```text
src/
├── app/                  # Expo Router file-based pages & layouts
│   ├── _layout.tsx       # Root layout, global providers & Stack options
│   ├── index.tsx         # Home screen with category filtering & FlatList
│   └── city/[id].tsx     # Dynamic route for destination details
├── components/           # Reusable memoized UI components
│   ├── CityItem.tsx      # Destination card component
│   ├── CategoryFilter.ts # Horizontal filter chip container
│   └── WelcomeModal.tsx  # First-run onboarding modal
├── contexts/             # Global state management
│   └── FavoritesContext  # Bookmarking state & AsyncStorage controller
├── hooks/                # Custom business logic hooks
│   └── useCityFilter.ts  # Filtering & search logic
├── i18n/                 # Translation dictionaries (en, pt, es) & setup
├── utils/                # Data resolution helpers & localized string parsers
└── data/                 # Static data contracts, types, and asset imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or pnpm / yarn
- Expo Go app installed on your physical device or an Android/iOS Emulator

### Installation

Clone the repository:

```bash
git clone [https://github.com/your-username/14ndscapes.git](https://github.com/your-username/14ndscapes.git)
cd 14ndscapes
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to launch the project.

## 🛠️ Tech Stack

- **Core Framework:** React Native / Expo SDK
- **Navigation:** Expo Router (Stack Navigation)
- **Language:** TypeScript (Strict Mode)
- **Localization:** i18next / react-i18next / expo-localization
- **Storage:** @react-native-async-storage/async-storage
- **Media & UI:** expo-image, react-native-safe-area-context

## 🗺️ Product Roadmap

- [ ] Real-time Weather Integration (TanStack Query + OpenWeatherMap API)
- [x] External Google Maps Integration & Destination Sharing
- [x] Automated Testing Suite (Vitest + React Native Testing Library)
- [ ] CI/CD Pipeline via GitHub Actions
