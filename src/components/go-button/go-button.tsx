import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { forwardRef, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import { Spinner } from "../spinner/spinner";
import styles from "./go-button.module.css";

interface GoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  type: React.ComponentProps<"button">["type"];
  asChild?: boolean;
  icon?: React.FC;
  side?: "left" | "right";
}

export const GoButton = forwardRef<HTMLButtonElement, GoButtonProps>(
  ({ className = "", loading, asChild = false, children, icon, side = "left", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const Icon = icon ? icon : BiSend;

    const renderIcon = () => (loading ? <Spinner type="fade-quick" /> : <Icon />);

    return (
      <Comp
        className={clsx(styles.goButton, styles[side], className)}
        data-loading={loading}
        ref={ref}
        {...props}
      >
        {side === "left" && <span className={styles.leftIcon}>{renderIcon()}</span>}
        <span className={styles.text}>{children}</span>
        {side === "right" && <span className={styles.rightIcon}>{renderIcon()}</span>}
      </Comp>
    );
  },
);
GoButton.displayName = "Button";
