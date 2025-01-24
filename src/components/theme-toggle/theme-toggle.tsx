import { THEMES, activeThemeIconMap, themeIconMap, useTheme } from "@/context/theme";
import * as Popover from "@radix-ui/react-popover";
import { clsx } from "clsx";
import { useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import styles from "./theme-toggle.module.css";

export const ThemeToggle = ({ variant }: { variant?: "filled" }) => {
  const [open, setOpen] = useState(false);
  const { theme, selectTheme, nextTheme, toggleTheme } = useTheme();

  const NextThemeIcon = themeIconMap[nextTheme];
  return (
    <div className={clsx(styles.themeToggle, variant && styles[variant])}>
      <button type="button" className={styles.iconButton} onClick={toggleTheme}>
        <NextThemeIcon />
      </button>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger className={styles.trigger}>
          <BiChevronDown data-icon="chevron-down" size="0.875rem" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} aria-label="Theme options" role="menu">
            {THEMES.map((t) => {
              const Icon = (t === theme ? activeThemeIconMap : themeIconMap)[t];
              return (
                <button
                  key={t}
                  onClick={() => {
                    selectTheme(t);
                    setOpen(false);
                  }}
                  aria-current={theme === t}
                  type="button"
                  className={styles.item}
                >
                  <Icon />
                  <span>{t}</span>
                  {theme === t && <BiCheck className={styles.checkIcon} />}
                </button>
              );
            })}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
