// src/hooks/useWelcomeModal.ts
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
        // Se ainda não viu (hasSeenWelcome é null/falsy), exibe o modal
        if (isMounted && !hasSeenWelcome) {
          setIsVisible(true);
        }
      } catch {
        // Se houver erro no storage, não bloqueia o app
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
      // Salva no AsyncStorage que o usuário já viu o modal
      await AsyncStorage.setItem(WELCOME_STORAGE_KEY, "true");
    } catch {
      // Ignora erros de persistência
    }
  }, []);

  return { isVisible, dismiss };
}
