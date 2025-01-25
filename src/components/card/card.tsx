import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { forwardRef } from "react";
import styles from "./card.module.css";

interface CardProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp {...props} ref={ref} className={clsx(className, styles.card)}>
        {children}
      </Comp>
    );
  },
);
