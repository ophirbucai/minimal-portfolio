import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import styles from "./social.module.css";

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/ophirbucai",
    children: (
      <BiLogoLinkedin
        className={styles.socialIcon}
        aria-label="Ophir Bucai on Linkedin"
      />
    ),
  },
  {
    href: "https://github.com/ophirbucai",
    children: (
      <BiLogoGithub
        className={styles.socialIcon}
        aria-label="Ophir Bucai on GitHub"
      />
    ),
  },
] satisfies React.ComponentProps<"a">[];

export const Social = () => {
  return (
    <ul className={styles.social}>
      {SOCIAL_LINKS.map((a) => (
        <li key={a.href}>
          <a {...a} rel="noopener noreferrer" target="_blank" />
        </li>
      ))}
    </ul>
  );
};
