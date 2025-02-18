import { useScrollFade } from "@/hooks/useScrollFade";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { GoButton } from "../go-button/go-button";
import { ResumeModal } from "../resume-modal/resume-modal";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero} {...useScrollFade()}>
      <h1 className={styles.title}>
        <span className={clsx(styles.titleIAm, styles.secondaryColor)}>I'm</span>{" "}
        <span className={styles.titleName}>Ophir Bucai</span>
      </h1>
      <p className={clsx(styles.description, styles.secondaryColor)}>
        Software developer helping startups turn their visions into a digital reality. I specialize
        in building modern <span className="nobr">web-based</span> apps.
      </p>
      <div className={styles.callToAction}>
        <ResumeModal />
        <DialogTrigger asChild>
          <GoButton className={styles.contact} loading={false} side="right" type="button">
            Get in touch
          </GoButton>
        </DialogTrigger>
      </div>
    </section>
  );
};
