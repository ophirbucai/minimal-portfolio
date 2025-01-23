import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeState } from "./theme-context.state";
import type { ThemeType } from "./theme-context.types";

interface ThemeContextType {
  themeState: ThemeState;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeState = useRef(new ThemeState()).current;

  useEffect(() => {
    themeState.applyTheme();
    return () => themeState.cleanup();
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ themeState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { themeState } = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeState.theme);
  const [systemTheme, setSystemTheme] = useState(themeState.systemTheme);
  const [nextTheme, setNextTheme] = useState(themeState.nextTheme);

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

  return {
    theme,
    systemTheme,
    selectTheme,
    toggleTheme,
    nextTheme,
  };
};
