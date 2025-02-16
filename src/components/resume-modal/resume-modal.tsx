import dialogStyles from "@/assets/styles/dialog.module.css";
import { useResumeData } from "@/hooks/useResumeData";
import { useTitle } from "@/hooks/useTitle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { AiOutlineDownload } from "react-icons/ai";
import { InnerHTML } from "../inner-html/inner-html";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import styles from "./resume-modal.module.css";

export const ResumeModal = () => {
  const { changeTitle, revertChangeTitle } = useTitle("My Resume");
  const { resume } = useResumeData();
  return (
    <Dialog onOpenChange={(open) => (open ? changeTitle() : revertChangeTitle())}>
      <DialogTrigger className={styles.resumeTrigger} type="button">
        See my resume
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={dialogStyles.dialogOverlay} />
        <DialogContent
          className={dialogStyles.dialogContent}
          onCloseAutoFocus={(e) => e.preventDefault()}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <header className={dialogStyles.dialogHeader}>
            <DialogTitle className={clsx(dialogStyles.dialogTitle, styles.dialogTitle)}>
              My Resume
            </DialogTitle>
            <ThemeToggle toggleOnly />
            <a
              className={dialogStyles.dialogHeaderButton}
              href={`${import.meta.env.VITE_PUBLIC_RESUME_URL}?dl=true`}
              rel="noopener noreferrer"
              target="_blank"
              title="Download Resume in PDF"
            >
              <AiOutlineDownload fontSize="1.25rem" />
            </a>
            <DialogClose className={styles.done}>Done</DialogClose>
          </header>
          <div className={clsx(dialogStyles.dialogBody, styles.resume)}>
            <InnerHTML content={resume?.introduction} />
            <section>
              <InnerHTML asChild content={resume?.contact}>
                <ul className={styles.contactDetails} />
              </InnerHTML>
            </section>
            <InnerHTML content={resume?.experience} />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
