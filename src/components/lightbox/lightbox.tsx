import Image1 from "@/assets/img/ramon.space/5756cef7-40e5-4cbf-8261-479006c47f33.webp";
import Image2 from "@/assets/img/ramon.space/dd818778-c12e-4c04-8759-0bcdbd16095a.webp";
import Image3 from "@/assets/img/ramon.space/e48348e0-870d-428a-9bd0-0fe25e9039ce.webp";
import style from "./lightbox.module.css";

import dialogStyles from "@/assets/styles/dialog.module.css";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Lightbox = () => {
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(-1);
  const slides = useRef<HTMLImageElement[]>([]);
  const imagesObserver = useRef<IntersectionObserver | null>(
    new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
            setCurrentSlideIndex(Number.parseInt(entry.target.dataset.index as string));
          }
        }
      },
      {
        threshold: 0.5,
      },
    ),
  );
  useEffect(() => imagesObserver.current?.disconnect(), []);

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

        <div className={style.lightbox}>
          {[Image1, Image2, Image3].map((src, index) => (
            <img
              key={src}
              alt="Aerospace convention"
              aria-current={currentSlideIndex === index}
              className={style.slide}
              data-index={index}
              src={src}
              onLoad={(e) => {
                const el = e.currentTarget;
                if (el && !el.dataset.observed) {
                  slides.current[index] = el;
                  el.dataset.observed = "true";
                  imagesObserver.current?.observe(el);
                }
              }}
            />
          ))}
        </div>
      </DialogContent>
    </DialogPortal>
  );
};

export default Lightbox;
