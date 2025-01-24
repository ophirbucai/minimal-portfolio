import { Menu } from "../menu/menu";
import { Social } from "../social/social";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import styles from "./floating-header.module.css";

export const FloatingHeader = () => {
  return (
    <header className={styles.floatingHeader}>
      <img className={styles.logo} src="/favicon.ico" alt="" />
      <nav className={styles.navigation}>
        <Menu />
        <Social />
      </nav>
      <ThemeToggle />
    </header>
  );
};
