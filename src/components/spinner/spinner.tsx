import { useMemo } from "react";
import styles from "./spinner.module.css";

const generatePositions = (count: number) => {
  const step = 360 / count;
  return Array.from({ length: count }, (_, i) => Math.floor(i * step));
};

type SpinnerType = "fade" | "fade-more" | "fade-quick";

interface SpinnerProps {
  type: SpinnerType;
  className: string;
  lines?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  type,
  className,
  lines = 13,
}) => {
  const positions = useMemo(() => generatePositions(lines), [lines]);
  return (
    <div
      className={`${styles.spinner} ${className}`}
      aria-busy="true"
      aria-live="polite"
    >
      {positions.map((position, index) => (
        <div className={styles.line} key={position}>
          <div
            className={`${styles.inner} ${styles[type]}`}
            style={{
              animationDelay: `-${(index / positions.length).toFixed(6)}s`,
              transform: `translateY(-50%) rotate(${position}deg) translateX(0.5em)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
