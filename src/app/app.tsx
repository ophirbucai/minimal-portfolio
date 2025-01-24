import { FloatingHeader } from "@/components/floating-header/floating-header";
import { GoButton } from "@/components/go-button/go-button";
import { Spots } from "@/components/spots/spots";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { useState } from "react";
import styles from "./app.module.css";

export function App() {
  const [loading, setLoading] = useState(false);

  async function send() {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
  }
  return (
    <div className={styles.layout}>
      <Spots side="top" />
      <FloatingHeader />
      <footer className={styles.footer}>
        <Spots side="bottom" />
      </footer>
    </div>
  );
}

export default App;
