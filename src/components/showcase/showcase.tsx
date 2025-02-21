import Image1 from "@/assets/img/ramon.space/5756cef7-40e5-4cbf-8261-479006c47f33.webp";
import Image2 from "@/assets/img/ramon.space/dd818778-c12e-4c04-8759-0bcdbd16095a.webp";
import Image3 from "@/assets/img/ramon.space/e48348e0-870d-428a-9bd0-0fe25e9039ce.webp";
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
    <section className={styles.showcase} id="showcase">
      <h2 className={styles.title} {...useScrollFade()}>
        Selected Work
      </h2>
      <div className={styles.cards}>
        <Card asChild {...useScrollFade()}>
          <a
            className={styles.card}
            href="https://noti.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Noti Token Logo" className={styles.cardIcon} src={NotiToken} />
            <h3 className={styles.cardTitle}>NOTI: Token Sniping Platform</h3>
            <p className={styles.cardDescription}>
              Architected and implemented a high-volume referral-based token sale system handling
              complex user relationships and transactions. Designed an intuitive interface for users
              to analyze, track and invest in prelaunched tokens.
            </p>
            <span className={styles.cardButton}>
              Go to website
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </span>
          </a>
        </Card>
        <Card asChild {...useScrollFade()}>
          <a
            className={styles.card}
            href="https://npmjs.com/eslint-plugin-lorem"
            rel="noopener noreferrer"
            target="_blank"
          >
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
            <span className={styles.cardButton}>
              View on NPM
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </span>
          </a>
        </Card>

        <Dialog>
          <DialogTrigger asChild className={styles.card}>
            <Card {...useScrollFade()}>
              <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
                <img alt="Ramon.Space NuPod" className={styles.nupod} src={NuPod} />
              </span>
              <h3 className={styles.cardTitle}>Ramon.Space Interface</h3>
              <p className={styles.cardDescription}>
                Engineered desktop application bridging hardware interface with Python backend.
                Built responsive UI using Electron IPC for seamless communication. It was a
                rewarding challenge, culminating in a successful presentation at the Washington, DC
                aerospace convention
              </p>
              <span className={styles.cardButton}>
                See the product
                <AiOutlineArrowRight className={styles.cardButtonIcon} />
              </span>
            </Card>
          </DialogTrigger>
          <Suspense fallback={null}>
            <Lightbox slides={[Image1, Image2, Image3]} />
          </Suspense>
        </Dialog>
        <Card asChild {...useScrollFade()}>
          <a
            className={styles.card}
            href="https://github.com/ophirbucai/minimal-portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <BiWorld fontSize={24} />
            </span>
            <h3 className={styles.cardTitle}>Personal Website</h3>
            <p className={styles.cardDescription}>
              Crafted modern portfolio with React, TypeScript Framer Motion and CSS Modules.
              Implemented serverless form handling with CloudFlare workers and ReCaptcha
            </p>
            <span className={styles.cardButton}>
              Show me the code
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </span>
          </a>
        </Card>
        <Card asChild {...useScrollFade()}>
          <a
            className={styles.card}
            href="https://song-server-va7s.onrender.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <img alt="Project by Ophir Bucai" src={Track} />
            </span>
            <h3 className={styles.cardTitle}>Spotifik: Music Discovery Platform</h3>
            <p className={styles.cardDescription}>
              A custom-built music discovery platform with tailored genre-based playlists, inspired
              by Spotify.
            </p>
            <span className={styles.cardButton}>
              Listen on the app
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </span>
          </a>
        </Card>
      </div>
    </section>
  );
};
