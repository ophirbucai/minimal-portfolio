import { DialogTrigger } from "@radix-ui/react-dialog";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      {/* <li>
        <button type="button">Work</button>
      </li>
      <li>
        <button type="button">Skills</button>
      </li> */}
      <li>
        <DialogTrigger>Contact</DialogTrigger>
      </li>
    </ul>
  );
};
