import NotiToken from "@/assets/img/showcase/noti-token.svg";
import RecipesHub from "@/assets/img/showcase/recipes-hub.png";
import Track from "@/assets/img/showcase/track.svg";
import { useScrollFade } from "@/hooks/useScrollFade";
import { clsx } from "clsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Card } from "../card/card";
import styles from "./showcase.module.css";

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
            <h3 className={styles.cardTitle}>
              Noti: Crypto Sniping & Prelaunch Investment Platform
            </h3>
            <p className={styles.cardDescription}>
              A comprehensive crypto sniping platform enabling users to invest in prelaunched tokens
              with precision and speed. As a full-stack developer, you played a pivotal role in
              building every aspect of the platform, ensuring a seamless experience for users in a
              highly competitive market. Designed intuitive tools for users to analyze, track, and
              invest in upcoming tokens.
            </p>
            <a
              className={styles.cardButton}
              href="https://app.noti.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit dashboard
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>
        <Card asChild {...useScrollFade()}>
          <article>
            <span className={clsx(styles.cardIcon, styles.cardImage, styles.spotifik)}>
              <img alt="Project by Ophir Bucai" src={Track} />
            </span>
            <h3 className={styles.cardTitle}>Spotifik: Personalized Music Curation Platform</h3>
            <p className={styles.cardDescription}>
              A custom-built music discovery platform inspired by Spotify, leveraging React for a
              seamless UI and NestJS for robust backend performance. Focused on delivering tailored
              genre-based playlists and integration with third-party APIs for music metadata.
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
        <Card asChild {...useScrollFade()}>
          <article>
            <img
              alt="Project by Ophir Bucai"
              className={clsx(styles.cardIcon, styles.cardImage)}
              src={RecipesHub}
            />
            <h3 className={styles.cardTitle}>Recipes Hub: Share, Discover, and Cook Together</h3>
            <p className={styles.cardDescription}>
              An online space for Food enthusiasts to share, and enjoy the art of cooking. Built
              with a focus on community and discovery, this app allows users to showcase their
              favorite recipes while searching for new culinary inspirations.
              <br />
              Built with a responsive design for seamless use across devices, it’s perfect for
              browsing in the kitchen or on the go.
            </p>
            <a
              className={styles.cardButton}
              href="https://"
              rel="noopener noreferrer"
              target="_blank"
            >
              Explore the hub
              <AiOutlineArrowRight className={styles.cardButtonIcon} />
            </a>
          </article>
        </Card>
      </div>
    </section>
  );
};
