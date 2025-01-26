import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import styles from "./social.module.css";

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/ophirbucai",
    children: <BiLogoLinkedin aria-label="Ophir Bucai on Linkedin" className={styles.socialIcon} />,
  },
  {
    href: "https://github.com/ophirbucai",
    children: <BiLogoGithub aria-label="Ophir Bucai on GitHub" className={styles.socialIcon} />,
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
