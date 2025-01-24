import styles from "./spots.module.css";

export const Spots = ({ side }: { side: "top" | "bottom" }) => (
  <div className={`${styles.spots} ${styles[side]}`} />
);
