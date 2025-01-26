import { ContactForm } from "@/components/contact-form/contact-form";
import { FloatingHeader } from "@/components/floating-header/floating-header";
import { Hero } from "@/components/hero/hero";
import { Showcase } from "@/components/showcase/showcase";
import { Spots } from "@/components/spots/spots";
import { TechStack } from "@/components/tech-stack/tech-stack";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.layout}>
      <Spots side="top" />
      <FloatingHeader />
      <Hero />
      <Showcase />
      <TechStack />
      <footer className={styles.footer}>
        <Spots side="bottom" />
      </footer>
      <ContactForm />
    </div>
  );
}

export default App;
