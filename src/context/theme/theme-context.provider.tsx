import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ThemeState } from "./theme-context.state";
import type { SystemThemeType, ThemeType } from "./theme-context.types";

interface ThemeContextType {
  theme: ThemeType;
  systemTheme: SystemThemeType;
  selectTheme: (newTheme: ThemeType) => void;
  toggleTheme: () => void;
  nextTheme: SystemThemeType;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeState = useRef(new ThemeState()).current;
  const [theme, setTheme] = useState(themeState.theme);
  const [systemTheme, setSystemTheme] = useState(themeState.systemTheme);
  const [nextTheme, setNextTheme] = useState(themeState.nextTheme);

  useEffect(() => {
    themeState.applyTheme();
    return () => themeState.cleanup();
  }, [themeState]);

  useEffect(() => {
    themeState.subscribe(() => {
      setTheme(themeState.theme);
      setSystemTheme(themeState.systemTheme);
      setNextTheme(themeState.nextTheme);
    });
  }, [themeState]);

  const selectTheme = useCallback(
    (newTheme: ThemeType) => {
      themeState.theme = newTheme;
    },
    [themeState],
  );

  const toggleTheme = useCallback(() => {
    themeState.toggleTheme();
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ theme, nextTheme, systemTheme, selectTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within ThemeContext Provider");
  }

  return themeContext;
};
