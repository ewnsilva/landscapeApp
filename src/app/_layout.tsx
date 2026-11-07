import { queryClient, queryPersister } from "@/lib/queryClient";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";
import { WelcomeModal } from "@/components/WelcomeModal";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { useWelcomeModal } from "@/hooks/useWelcomeModal";
import { initializeLanguage } from "@/i18n";
import { useTranslation } from "@/i18n/useTranslation";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const { t } = useTranslation();
  const { isVisible, dismiss } = useWelcomeModal();

  useEffect(() => {
    initializeLanguage();
  }, []);

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
          <WelcomeModal onDismiss={dismiss} visible={isVisible} />
        </FavoritesProvider>
      </PersistQueryClientProvider>
    </AppErrorBoundary>
  );
}
