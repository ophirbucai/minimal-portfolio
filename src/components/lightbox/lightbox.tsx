import dialogStyles from "@/assets/styles/dialog.module.css";
import style from "./lightbox.module.css";

import { useSlideObserver } from "@/hooks/useSlideObserver";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Lightbox = ({ slides }: { slides: readonly string[] }) => {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { onSlideLoaded } = useSlideObserver(
    useCallback(
      (index) => {
        if (!isTransitioning) {
          setSlideIndex(index);
        }
      },
      [isTransitioning],
    ),
  );

  const scrollToSlide = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    if (!slideContainerRef.current) return;

    const slide = slideContainerRef.current.children[index];
    slide.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (slideIndex === 0) {
      setIsTransitioning(true);
      timeoutId = setTimeout(() => {
        scrollToSlide(extendedSlides.length - 2, "auto");
        setIsTransitioning(false);
      }, 300);
    } else if (slideIndex === extendedSlides.length - 1) {
      setIsTransitioning(true);
      timeoutId = setTimeout(() => {
        scrollToSlide(1, "auto");
        setIsTransitioning(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [slideIndex, scrollToSlide, extendedSlides.length]);

  useEffect(() => {
    scrollToSlide(slideIndex);

    const timeoutId = setTimeout(() => scrollToSlide(slideIndex + 1), 5000);

    return () => clearTimeout(timeoutId);
  }, [slideIndex, scrollToSlide]);

  const realIndex =
    slideIndex === 0
      ? slides.length - 1
      : slideIndex === extendedSlides.length - 1
        ? 0
        : slideIndex - 1;

  return (
    <DialogPortal>
      <DialogOverlay className={dialogStyles.dialogOverlay} />
      <DialogContent className={dialogStyles.dialogContent}>
        <header className={dialogStyles.dialogHeader}>
          <div>
            <DialogTitle>Washington, DC aerospace convention</DialogTitle>
          </div>
          <DialogClose className={dialogStyles.dialogHeaderButton}>
            <AiOutlineCloseCircle />
          </DialogClose>
        </header>

        <section className={style.lightboxContainer}>
          <div ref={slideContainerRef} className={style.lightbox}>
            {extendedSlides.map((src, index) => (
              <div
                key={`${src}-${index.toString()}`}
                ref={(el) => onSlideLoaded(el, index)}
                className={style.slideWrapper}
              >
                <img
                  alt="Aerospace convention"
                  aria-current={realIndex === index || slideIndex === index}
                  className={style.slide}
                  src={src}
                />
              </div>
            ))}
          </div>

          <div className={style.indicators}>
            {slides.map((_, i) => (
              <button
                key={i.toString()}
                aria-current={i === realIndex}
                className={style.indicator}
                type="button"
                onClick={() => setSlideIndex(i + 1)}
              />
            ))}
          </div>
        </section>
      </DialogContent>
    </DialogPortal>
  );
};

export default Lightbox;
