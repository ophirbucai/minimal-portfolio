import { animate, scroll } from "motion";
import { useEffect, useRef } from "react";

export const useScrollFade = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    if (!["relative", "sticky", "absolute"].includes(window.getComputedStyle(element).position)) {
      element.style.setProperty("position", "relative");
    }

    scroll(animate(element, { opacity: [0, 1, 1, 0] }), {
      target: element,
      offset: ["start end", "end end", "start 25vh", "end start"],
    });
  }, []);

  return { ref };
};
