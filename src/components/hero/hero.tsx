import { clsx } from "clsx";
import { GoButton } from "../go-button/go-button";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        <span className={clsx(styles.titleHi, styles.secondaryColor)}>Hi! 👋</span>
        <span className={clsx(styles.titleIAm, styles.secondaryColor)}>I'm</span>{" "}
        <span className={styles.titleName}>Ophir Bucai</span>
      </h1>
      <p className={clsx(styles.description, styles.secondaryColor)}>
        Front-end engineer helping startups turn their visions into a digital reality. I specialize
        in building modern <span className="nobr">web-based</span> apps.
      </p>
      <div className={styles.callToAction}>
        <button className={styles.resume} type="button">
          See my resume
        </button>
        <GoButton loading={false} className={styles.contact} type="button" side="right">
          Get in touch
        </GoButton>
      </div>
    </section>
  );
};
