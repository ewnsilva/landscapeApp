<div align="right">
  <a href="./README.md">English</a> | <strong>Português</strong> | <a href="./README_es-es.md">Español</a>
</div>

# 14ndscapes — Plataforma Global de Descoberta de Paisagens

O **14ndscapes** é uma aplicação mobile de alta performance desenvolvida para a descoberta curada de destinos turísticos e paisagens naturais renomadas. Construído com React Native e Expo Router, o aplicativo combina padrões modernos de design UX/UI, navegação reativa dinâmica e suporte multilíngue nativo para oferecer uma experiência mobile fluida, acessível e rápida.

---

## 🌟 Destaques do Produto & Proposta de Valor
- **Experiência Curada (14 Destinos Marcantes):** Focado em um catálogo altamente selecionado e de alto valor, apresentando 14 dos locais mais impressionantes do mundo através de uma interface visual imersiva.
- **Suporte Multilíngue Nativo:** Internacionalização nativa completa para **Inglês (padrão)**, **Português** e **Espanhol**, proporcionando acessibilidade global imediata e troca de idioma em tempo real.
- **Fluxo de Onboarding Inteligente:** Experiência de boas-vindas no primeiro acesso apresentando a proposta de valor do app, com estado de interação do usuário gerenciado via persistência local.
- **Arquitetura Offline-First:** O catálogo principal de destinos, a matriz de filtro por categorias e as atrações localizadas carregam instantaneamente, sem dependência de latência de rede.
- **Mecanismo de Favoritos Persistente:** Sistema de marcadores baseado em estado que permite ao usuário salvar seus destinos preferidos mesmo após reiniciar o aplicativo.

---

## 🏗️ Arquitetura & Decisões de Engenharia

```text
┌─────────────────────────────────────────────────────────────┐
│                      14ndscapes App                         │
├──────────────────────────────┬──────────────────────────────┤
│  Camada de UI (Expo Router)  │  Camada de Estado & Contexto │
│  • Roteamento por Arquivos   │  • FavoritesContext          │
│  • Header Nativo de Navegação│  • Motor i18next             │
├──────────────────────────────┼──────────────────────────────┤
│  Performance & UX            │  Camada de Persistência      │
│  • FlatList Memoizada        │  • Motor AsyncStorage        │
│  • Motor expo-image          │  • Dados Locais Dinâmicos    │
└──────────────────────────────┴──────────────────────────────┘
```

### Principais Estratégias Técnicas
- **Roteamento Baseado em Arquivos (Expo Router):** Roteamento estritamente tipado com TypeScript aproveitando a navegação Stack nativa para transições de tela fluidas e personalização precisa do cabeçalho.
- **Renderização Otimizada de Imagens:** Implementação do expo-image para cache em memória, persistência automática em disco e transições suaves de imagem.
- **Performance de Lista Virtualizada:** Configuração altamente otimizada da FlatList utilizando memoização do React (useCallback, React.memo) e ajustes finos de virtualização (windowSize, maxToRenderPerBatch, removeClippedSubviews) para manter 60 FPS consistentes na rolagem.
- **Separação de Responsabilidades:** Lógica de negócios encapsulada em custom hooks limpos (useCityFilter), desacoplando a renderização da interface do manuseio de estado.
- **Estratégia de Dados Localizados:** Motor de internacionalização desacoplado que combina i18next com utilitários de resolução de dados (getLocalizedCity) para entregar objetos traduzidos dinamicamente.


📂 Estrutura do Projeto

```text
src/
├── app/                  # Páginas e layouts baseados em arquivos do Expo Router
│   ├── _layout.tsx       # Layout raiz, providers globais e opções de Stack
│   ├── index.tsx         # Tela inicial com filtro de categorias e FlatList
│   └── city/[id].tsx     # Rota dinâmica para detalhes do destino
├── components/           # Componentes de UI reutilizáveis e memoizados
│   ├── CityItem.tsx      # Componente de card do destino
│   ├── CategoryFilter.ts # Container horizontal de chips de filtro
│   └── WelcomeModal.tsx  # Modal de onboarding do primeiro acesso
├── contexts/             # Gerenciamento de estado global
│   └── FavoritesContext  # Estado de favoritos e controlador do AsyncStorage
├── hooks/                # Custom hooks de lógica de negócios
│   └── useCityFilter.ts  # Lógica de filtragem e busca
├── i18n/                 # Dicionários de tradução (en, pt, es) e configurações
├── utils/                # Helpers de resolução de dados e parsers de strings
└── data/                 # Contratos de dados estáticos, tipos e assets
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18.0.0 ou superior)
- npm, pnpm ou yarn
- Aplicativo Expo Go instalado no celular ou um emulador Android/iOS

### Instalação

Clone o repositório:

```bash
git clone [https://github.com/ewnsilva/14ndscapes.git](https://github.com/ewnsilva/14ndscapes.git)
cd 14ndscapes
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

Escaneie o código QR com o Expo Go (Android) ou com o app de Câmera (iOS) para abrir o projeto.

## 🛠️ Tecnologias Utilizadas
- **Framework Principal**: React Native / Expo SDK
- **Navegação**: Expo Router (Stack Navigation)
- **Linguagem**: TypeScript (Modo Estrito)
- **Internacionalização**: i18next / react-i18next / expo-localization
- **Armazenamento Local**: @react-native-async-storage/async-storage
- **Mídia & UI**: expo-image, react-native-safe-area-context

## 🗺️ Roadmap do Produto
- [ ] Integração com API de Clima em Tempo Real (TanStack Query + OpenWeatherMap API)
- [ ] Mapas Interativos com Geolocalização (react-native-maps)
- [ ] Suíte de Testes Automatizados (Vitest + React Native Testing Library)
- [ ] Pipeline de CI/CD via GitHub Actions
