import Lorem from "@/assets/img/showcase/Lorem.png";
import NotiToken from "@/assets/img/showcase/noti-token.svg";
import NuPod from "@/assets/img/showcase/nupod.webp";
import Track from "@/assets/img/showcase/track.svg";
import { useScrollFade } from "@/hooks/useScrollFade";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { Suspense, lazy } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { Card } from "../card/card";
import styles from "./showcase.module.css";

const Lightbox = lazy(() => import("@/components/lightbox/lightbox"));

export const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.title} {...useScrollFade()}>
        Selected Work
      </h2>
      <div className={styles.cards}>
        <Card asChild {...useScrollFade()}>
          <article>
            <img alt="Noti Token Logo" className={styles.cardIcon} src={NotiToken} />
            <h3 className={styles.cardTitle}>NOTI: Token Sniping Platform</h3>
            <p className={styles.cardDescription}>
              Architected and implemented a high-volume referral-based token sale system handling
              complex user relationships and transactions. Designed an intuitive interface for users
              to analyze, track and invest in prelaunched tokens.
            </p>
            <a
              className={styles.cardButton}
              href="https://noti.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Go to website
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>
        <Card asChild {...useScrollFade()}>
          <article>
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <img alt="Project by Ophir Bucai" src={Lorem} />
            </span>
            <h3 className={styles.cardTitle}>ESLint Plugin Lorem</h3>
            <p className={styles.cardDescription}>
              Keeps your code clean from accidental placeholder strings (like "Lorem Imsum") in your
              codebase before they ever see the light of day. Scans both regular strings and
              template literals for unwanted placeholder text. Flexible configurations to meet the
              needs of the project.
            </p>
            <a
              className={styles.cardButton}
              href="https://npmjs.com/eslint-plugin-lorem"
              rel="noopener noreferrer"
              target="_blank"
            >
              View on NPM
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>

        <Card asChild {...useScrollFade()}>
          <article>
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <img alt="Ramon.Space NuPod" className={styles.nupod} src={NuPod} />
            </span>
            <h3 className={styles.cardTitle}>Ramon.Space Interface</h3>
            <p className={styles.cardDescription}>
              Engineered desktop application bridging hardware interface with Python backend. Built
              responsive UI using Electron IPC for seamless communication. It was a rewarding
              challenge, culminating in a successful presentation at the Washington, DC aerospace
              convention
            </p>
            <Dialog>
              <DialogTrigger className={styles.cardButton}>
                See the product
                <AiOutlineArrowRight className={styles.cardButtonIcon} />
              </DialogTrigger>
              <Suspense fallback={null}>
                <Lightbox />
              </Suspense>
            </Dialog>
          </article>
        </Card>
        <Card asChild {...useScrollFade()}>
          <article>
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <BiWorld fontSize={24} />
            </span>
            <h3 className={styles.cardTitle}>Personal Website</h3>
            <p className={styles.cardDescription}>
              Crafted modern portfolio with React, TypeScript Framer Motion and CSS Modules.
              Implemented serverless form handling with CloudFlare workers and ReCaptcha
            </p>
            <a
              className={styles.cardButton}
              href="https://github.com/ophirbucai/minimal-portfolio"
              rel="noopener noreferrer"
              target="_blank"
            >
              Show me the code
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>
        <Card asChild {...useScrollFade()}>
          <article>
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <img alt="Project by Ophir Bucai" src={Track} />
            </span>
            <h3 className={styles.cardTitle}>Spotifik: Music Discovery Platform</h3>
            <p className={styles.cardDescription}>
              A custom-built music discovery platform with tailored genre-based playlists, inspired
              by Spotify.
            </p>
            <a
              className={styles.cardButton}
              href="https://song-server-va7s.onrender.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Listen on the app
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>
      </div>
    </section>
  );
};
