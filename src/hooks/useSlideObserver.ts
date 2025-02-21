import { useCallback, useEffect, useRef } from "react";

export const useSlideObserver = <T extends HTMLElement>(onSlideChange: (index: number) => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const slideRefs = useRef<Map<number, T>>(new Map());

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.slideIndex);
            if (!Number.isNaN(index)) {
              onSlideChange(index);
            }
          }
        }
      },
      {
        threshold: 1,
        rootMargin: "300px",
      },
    );

    for (const [, el] of slideRefs.current) {
      observer.current?.observe(el);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [onSlideChange]);

  const onSlideLoaded = useCallback((el: T | null, index: number) => {
    if (!el) {
      slideRefs.current.delete(index);
      return;
    }

    el.dataset.slideIndex = String(index);
    slideRefs.current.set(index, el);
    observer.current?.observe(el);
  }, []);

  return { onSlideLoaded };
};
