import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager, QueryClient } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

onlineManager.setEventListener((setOnline) =>
  NetInfo.addEventListener((state) => setOnline(Boolean(state.isConnected))),
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 12,
      networkMode: "offlineFirst",
      refetchOnReconnect: true,
      retry: 1,
      staleTime: 1000 * 60 * 10,
    },
  },
});

export const queryPersister = createAsyncStoragePersister({
  key: "@landscape_app:query_cache",
  storage: AsyncStorage,
});
