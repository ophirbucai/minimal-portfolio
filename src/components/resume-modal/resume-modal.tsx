import dialogStyles from "@/assets/styles/dialog.module.css";
import { useTheme } from "@/context/theme";
import { useTitle } from "@/hooks/useTitle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { AiOutlineDownload } from "react-icons/ai";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import styles from "./resume-modal.module.css";

export const ResumeModal = () => {
  const { theme } = useTheme();
  const { changeTitle, revertChangeTitle } = useTitle("My Resume");
  return (
    <Dialog onOpenChange={(open) => (open ? changeTitle() : revertChangeTitle())}>
      <DialogTrigger className={styles.resumeTrigger} type="button">
        See my resume
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay key={theme} className={dialogStyles.dialogOverlay} />
        <DialogContent
          className={dialogStyles.dialogContent}
          onCloseAutoFocus={(e) => e.preventDefault()}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <header className={dialogStyles.dialogHeader}>
            <DialogTitle className={clsx(dialogStyles.dialogTitle, styles.dialogTitle)}>
              My Resume
            </DialogTitle>
            <ThemeToggle toggleOnly />
            <a
              className={dialogStyles.dialogHeaderButton}
              href={`${import.meta.env.VITE_PUBLIC_RESUME_URL}?dl=true`}
              rel="noopener noreferrer"
              target="_blank"
              title="Download Resume in PDF"
            >
              <AiOutlineDownload fontSize="1.25rem" />
            </a>
            <DialogClose className={styles.done}>Done</DialogClose>
          </header>
          <div className={clsx(dialogStyles.dialogBody, styles.resume)}>
            <h1>Ophir Bucai</h1>
            <p>
              Web Developer with a strong focus on practical solutions and maintainable code.
              Experienced in TypeScript, React, and building scalable backend systems. Passionate
              about creating eﬃcient tools and web applications.
            </p>
            <section>
              <ul className={styles.contactDetails}>
                <li>
                  Contact: <a href="tel:+972-544-475-574">+972-544-475-574</a>
                </li>
                <li>
                  Email: <a href="mailto:me@develophir.com">me@develophir.com</a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://linkedin.com/in/ophirbucai">linkedin.com/in/ophirbucai</a>
                </li>
                <li>
                  GitHub: <a href="https://github.com/ophirbucai">github.com/ophirbucai</a>
                </li>
              </ul>
            </section>
            <section>
              <h2>Experience</h2>
              <article>
                <hgroup>
                  <h5>Full Stack Developer, Noti</h5>
                  <h6>
                    <span>2024 - Present</span> |{" "}
                    <a href="https://noti.io" rel="noopener noreferrer" target="_blank">
                      noti.io
                    </a>
                  </h6>
                </hgroup>
                <ul className={styles.list}>
                  <li>
                    Developed a token sale web-app{" "}
                    <a href="https://privatesale.noti.io" rel="noreferrer noopener" target="_blank">
                      privatesale.noti.io
                    </a>{" "}
                    that handled $700k in transactions.
                  </li>
                  <li>
                    Built the token sniping platform{" "}
                    <a href="https://app.noti.io" rel="noreferrer noopener" target="_blank">
                      app.noti.io
                    </a>{" "}
                    web interface for crypto investors, following a complex flow and design
                    requirements in Figma.
                  </li>
                  <li>
                    Developed the backend in NestJS, validation logic, entity management with
                    TypeORM, optimized through Redis caching and JWT authentication.
                  </li>
                  <li>
                    Implemented a reusable component library in React, streamlining UI development.
                  </li>
                  <li>
                    Enhanced user experience by building real-time notifications and infinite
                    scroll.
                  </li>
                </ul>
              </article>
              <article>
                <hgroup>
                  <h5>Full Stack Developer, Common Ninja</h5>
                  <h6>
                    <span>2023</span> |{" "}
                    <a href="https://commoninja.com" rel="noopener noreferrer" target="_blank">
                      commoninja.com
                    </a>
                  </h6>
                </hgroup>
                <ul className={styles.list}>
                  <li>Created flexible, no-code widgets using React and TypeScript.</li>
                  <li>
                    Integrated widgets with WordPress and e-commerce platforms for broader
                    audiences.
                  </li>
                  <li>
                    Collaborated with designers to implement responsive and accessible designs.
                  </li>
                </ul>
              </article>
            </section>
            <section>
              <h2>Education</h2>
              <article>
                <strong>Full-Stack Bootcamp</strong> <small>(90h)</small>
                <h6>Coding Academy | 2024</h6>
              </article>
              <article>
                <strong>Full-Stack Web Developer Course</strong> <small>(232h)</small>
                <h6>Netcraft Academy | 2021</h6>
              </article>
            </section>
            <section>
              <h2>Tech Stack</h2>
              <div>
                <u>Frontend</u>: React.js, Next.js, Tanstack Query, Zustand, React Virtuoso,
                RadixUI, CSS/Sass, HTML
              </div>
              <div>
                <u>Backend</u>: Node.js, NestJS, Express, TypeORM, MySQL, Postgres, Redis
              </div>
              <div>
                <u>Tools</u>: Docker, NX, Vite, ESLint, Git
              </div>
            </section>
            <section>
              <h2>Projects</h2>
              <article>
                <hgroup>
                  <h5>ESLint Plugin Lorem</h5>
                  <h6>
                    <a
                      href="https://npmjs.com/eslint-plugin-lorem"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      npmjs.com/eslint-plugin-lorem
                    </a>
                  </h6>
                </hgroup>
                <small>
                  A lightweight plugin to prevent dummy text or other unwanted strings from being
                  included in production code. Illustrates the ease of creating tooling for better
                  code management.
                </small>
              </article>
              <article>
                <hgroup>
                  <h5>Spotifik</h5>
                  <h6>
                    <a
                      href="https://song-server-va7s.onrender.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      zeha.link/spotifik
                    </a>
                  </h6>
                  <small>
                    A Spotify-inspired music player for generating genre-based playlists.
                  </small>
                </hgroup>
                <ul className={styles.list}>
                  <li>
                    Integrated YouTube iframe to play songs and implemented local storage to save
                    the last played songs.
                  </li>
                  <li>
                    Developed the frontend with React, Zustand for state management, and Sass for
                    styling.
                  </li>
                  <li>Built the backend over 3 days, using NestJS, TypeORM and MongoDB.</li>
                </ul>
              </article>
            </section>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
