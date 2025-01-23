import { THEMES } from "./theme-context.constants";

export type ThemeType = (typeof THEMES)[number];

export type SystemThemeType = "dark" | "light";
