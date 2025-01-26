import Figma from "@/assets/img/tech-stack/figma.svg";
import GitHub from "@/assets/img/tech-stack/github.svg";
import NextJS from "@/assets/img/tech-stack/nextjs.svg";
import ReactHookForm from "@/assets/img/tech-stack/reacthookform.svg";
import Sass from "@/assets/img/tech-stack/sass.svg";
import TailwindCSS from "@/assets/img/tech-stack/tailwindcss.svg";
import ReactQuery from "@/assets/img/tech-stack/tanstack.svg";
import TypeScript from "@/assets/img/tech-stack/typescript.svg";
import Zod from "@/assets/img/tech-stack/zod.svg";
import Zustand from "@/assets/img/tech-stack/zustand.svg";
import { Card } from "@/components/card/card";
import { useScrollFade } from "@/hooks/useScrollFade";
import styles from "./tech-stack.module.css";

const CONTENT = [
  { icon: Figma, name: "Figma", badge: "Design" },
  { icon: NextJS, name: "Next.js", badge: "Web Framework" },
  { icon: TypeScript, name: "TypeScript", badge: "Language" },
  { icon: GitHub, name: "GitHub", badge: "Version Control" },
  { icon: ReactHookForm, name: "React Hook Form", badge: "Library" },
  { icon: TailwindCSS, name: "TailwindCSS", badge: "CSS" },
  { icon: ReactQuery, name: "React Query", badge: "Server State" },
  { icon: Zod, name: "Zod", badge: "Validation" },
  { icon: Zustand, name: "Zustand", badge: "Global State" },
  { icon: Sass, name: "Sass", badge: "CSS" },
] as const;

export const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2 className={styles.title} {...useScrollFade()}>
        Dev & Design
      </h2>
      <div className={styles.cards}>
        {CONTENT.map(({ icon, name, badge }) => (
          <Card className={styles.card} key={name} asChild {...useScrollFade()}>
            <article>
              <img src={icon} alt={name} />
              {name}
              <span className={styles.badge}>{badge}</span>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
};
