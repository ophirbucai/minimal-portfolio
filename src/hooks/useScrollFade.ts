import { animate, scroll } from "motion";
import { useEffect, useRef } from "react";

export const useScrollFade = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    if (!["relative", "sticky", "absolute"].includes(window.getComputedStyle(element).position)) {
      element.style.setProperty("position", "relative");
      console.log(window.getComputedStyle(element).position);
    }

    scroll(animate(element, { opacity: [0, 1, 1, 0] }), {
      target: element,
      offset: ["start end", "end end", "start start", "end start"],
    });
  }, []);

  return { ref };
};
