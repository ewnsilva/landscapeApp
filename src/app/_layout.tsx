import { queryClient, queryPersister } from "@/lib/queryClient";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack } from "expo-router";

export default function RootLayout() {
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
            <Stack.Screen name="home/index" options={{ title: "Início" }} />
            <Stack.Screen
              name="city/[id]"
              options={{
                title: "Sobre",
                headerBackButtonDisplayMode: "minimal",
              }}
            />
          </Stack>
        </FavoritesProvider>
      </PersistQueryClientProvider>
    </AppErrorBoundary>
  );
}
