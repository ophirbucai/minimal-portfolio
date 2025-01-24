import { BiDevices, BiPlanet, BiSolidDevices, BiSolidPlanet } from "react-icons/bi";
import { HiOutlineSun, HiSun } from "react-icons/hi";
import { ThemeType } from "./theme-context.types";

export const THEMES = ["dark", "light", "system"] as const;

export const themeIconMap = {
  light: HiOutlineSun,
  dark: BiPlanet,
  system: BiDevices,
} satisfies Record<ThemeType, React.FC>;

export const activeThemeIconMap = {
  light: HiSun,
  dark: BiSolidPlanet,
  system: BiSolidDevices,
} satisfies Record<ThemeType, React.FC>;
