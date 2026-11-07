import { AppErrorBoundary } from "@/components/AppErrorBoundary";
import { WelcomeModal } from "@/components/WelcomeModal";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { initializeLanguage } from "@/i18n";
import { useTranslation } from "@/i18n/useTranslation";
import { queryClient, queryPersister } from "@/lib/queryClient";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Mantém a splash screen visível enquanto carrega o idioma (opcional, mas recomendado)
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); // Sempre true ao abrir o app

  useEffect(() => {
    async function prepare() {
      try {
        await initializeLanguage();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AppErrorBoundary>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          buster: "weather-cache-v1",
          maxAge: 1000 * 60 * 60 * 12,
          persister: queryPersister,
          dehydrateOptions: {
            shouldDehydrateQuery: (query) => query.state.status === "success",
          },
        }}
      >
        <FavoritesProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: "#1b1b1b" },
              headerTintColor: "#ffffff",
              headerTitleStyle: { fontWeight: "bold" },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home/index" options={{ title: t("home.headerTitle") }} />
            <Stack.Screen
              name="city/[id]"
              options={{
                title: t("city.headerTitle"),
                headerBackButtonDisplayMode: "minimal",
              }}
            />
          </Stack>
          <WelcomeModal onDismiss={() => setIsWelcomeVisible(false)} visible={isWelcomeVisible} />
        </FavoritesProvider>
      </PersistQueryClientProvider>
    </AppErrorBoundary>
  );
}
