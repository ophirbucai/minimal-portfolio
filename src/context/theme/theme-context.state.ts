import { SystemThemeType, ThemeType } from "./theme-context.types";

export class ThemeState {
  private readonly mediaQuery: MediaQueryList;
  private currentTheme: ThemeType;
  private changeListeners: Set<() => void>;

  constructor() {
    const initialTheme =
      (localStorage.getItem("theme") as ThemeType) || "system";
    this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.currentTheme = initialTheme;
    this.changeListeners = new Set();

    this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);
    this.mediaQuery.addEventListener("change", this.handleMediaQueryChange);
  }

  get theme(): ThemeType {
    return this.currentTheme;
  }

  set theme(theme: ThemeType) {
    this.currentTheme = theme;
    localStorage.setItem("theme", theme);
    this.applyTheme();
    this.notifyListeners();
  }

  get systemTheme(): SystemThemeType {
    return this.mediaQuery.matches ? "dark" : "light";
  }

  get nextTheme(): SystemThemeType {
    const currentEffectiveTheme =
      this.currentTheme === "system" ? this.systemTheme : this.currentTheme;
    return currentEffectiveTheme === "dark" ? "light" : "dark";
  }

  toggleTheme() {
    this.theme = this.nextTheme;
  }

  get effectiveTheme(): SystemThemeType {
    return this.currentTheme === "system"
      ? this.systemTheme
      : (this.currentTheme as SystemThemeType);
  }

  private handleMediaQueryChange() {
    if (this.currentTheme === "system") {
      this.applyTheme();
      this.notifyListeners();
    }
  }

  public applyTheme() {
    document.documentElement.setAttribute("data-theme", this.effectiveTheme);
  }

  subscribe(listener: () => void) {
    this.changeListeners.add(listener);
    return () => this.changeListeners.delete(listener);
  }

  private notifyListeners() {
    for (const listener of this.changeListeners) {
      listener();
    }
  }

  cleanup() {
    this.mediaQuery.removeEventListener("change", this.handleMediaQueryChange);
    this.changeListeners.clear();
  }
}
