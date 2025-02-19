import Logo from "../../assets/d.svg?react";
import { Menu } from "../menu/menu";
import { Social } from "../social/social";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import styles from "./floating-header.module.css";

export const FloatingHeader = () => {
  return (
    <header className={styles.floatingHeader}>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Logo className={styles.logo} />
      </button>
      <nav className={styles.navigation}>
        <Menu />
        <Social />
      </nav>
      <ThemeToggle />
    </header>
  );
};
