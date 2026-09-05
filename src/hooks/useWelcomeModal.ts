import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const WELCOME_STORAGE_KEY = "@14ndscapes:has_seen_welcome";

export function useWelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkWelcomeState() {
      try {
        const hasSeenWelcome = await AsyncStorage.getItem(WELCOME_STORAGE_KEY);
        if (isMounted && !hasSeenWelcome) {
          setIsVisible(true);
        }
      } catch {
        // If storage fails, don't block the app by showing the modal.
      }
    }

    checkWelcomeState();
    return () => {
      isMounted = false;
    };
  }, []);

  const dismiss = useCallback(async () => {
    setIsVisible(false);
    try {
      await AsyncStorage.setItem(WELCOME_STORAGE_KEY, "true");
    } catch {
      // Ignore persistence errors — the modal will simply reappear next launch.
    }
  }, []);

  return { isVisible, dismiss };
}
