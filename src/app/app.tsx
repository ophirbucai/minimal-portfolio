import { FloatingHeader } from "@/components/floating-header/floating-header";
import { Hero } from "@/components/hero/hero";
import { Showcase } from "@/components/showcase/showcase";
import { Spots } from "@/components/spots/spots";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.layout}>
      <Spots side="top" />
      <FloatingHeader />
      <Hero />
      <Showcase />
      <footer className={styles.footer}>
        <Spots side="bottom" />
      </footer>
    </div>
  );
}

export default App;
