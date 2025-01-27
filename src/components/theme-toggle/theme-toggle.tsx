import { THEMES, activeThemeIconMap, themeIconMap, useTheme } from "@/context/theme";
import * as Popover from "@radix-ui/react-popover";
import { clsx } from "clsx";
import { useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import styles from "./theme-toggle.module.css";

export const ThemeToggle = ({
  variant,
  toggleOnly = false,
}: { variant?: "filled"; toggleOnly?: boolean }) => {
  const [open, setOpen] = useState(false);
  const { theme, selectTheme, nextTheme, toggleTheme } = useTheme();

  const NextThemeIcon = themeIconMap[nextTheme];
  return (
    <div className={clsx(styles.themeToggle, variant && styles[variant])}>
      <button className={styles.iconButton} type="button" onClick={toggleTheme}>
        <NextThemeIcon />
      </button>
      {!toggleOnly && (
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger className={styles.trigger}>
            <BiChevronDown data-icon="chevron-down" size="0.875rem" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content aria-label="Theme options" className={styles.content} role="menu">
              {THEMES.map((t) => {
                const Icon = (t === theme ? activeThemeIconMap : themeIconMap)[t];
                return (
                  <button
                    key={t}
                    aria-current={theme === t}
                    className={styles.item}
                    type="button"
                    onClick={() => {
                      selectTheme(t);
                      setOpen(false);
                    }}
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
      )}
    </div>
  );
};
