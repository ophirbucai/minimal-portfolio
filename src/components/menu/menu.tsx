import styles from "./menu.module.css";

const HASH_ROUTES = [
  { href: "#", children: "Home" },
] satisfies React.ComponentProps<"a">[];

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      {HASH_ROUTES.map((a) => (
        <li key={a.href}>
          <a {...a} />
        </li>
      ))}
    </ul>
  );
};
