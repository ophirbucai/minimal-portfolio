import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { BiSend } from "react-icons/bi";
import { Spinner } from "../spinner/spinner";
import styles from "./go-button.module.css";

interface GoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  type: React.ComponentProps<"button">["type"];
  asChild?: boolean;
}

export const GoButton = forwardRef<HTMLButtonElement, GoButtonProps>(
  ({ className, loading, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={styles.goButton}
        data-loading={loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <Spinner type="fade-quick" className={styles.icon} />
        ) : (
          <BiSend className={styles.icon} />
        )}
        <span className={styles.text}>{children}</span>
      </Comp>
    );
  },
);
GoButton.displayName = "Button";
