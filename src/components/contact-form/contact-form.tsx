import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoButton } from "../go-button/go-button";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const [loading] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log();
  }

  return (
    <DialogPortal>
      <DialogOverlay className={styles.dialogOverlay} />
      <DialogContent className={styles.dialogContent} onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogTitle className={styles.dialogTitle}>Get in touch</DialogTitle>
        <header className={styles.dialogHeader}>
          <DialogDescription className={styles.dialogDescription}>
            Let's build something awesome
          </DialogDescription>
          <DialogClose>
            <AiOutlineCloseCircle className={styles.dialogClose} />
          </DialogClose>
        </header>
        <form className={styles.contactForm} method="POST" onSubmit={handleSubmit}>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              required
              aria-describedby="email-error"
              className={styles.input}
              name="email"
              placeholder="wonderful@world.io"
              type="email"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              className={styles.input}
              minLength={2}
              name="name"
              placeholder="Your name here"
              type="text"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="subject">
              Subject:
            </label>
            <input
              required
              className={styles.input}
              name="subject"
              placeholder="Inpiring topic ✨"
              type="text"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              required
              className={styles.textarea}
              name="message"
              placeholder="Details of the project or job, tehcnologies would be helpful for me to understand more about"
              rows={7}
            />
          </fieldset>
          <footer className={styles.footer}>
            <GoButton disabled className={styles.submitButton} loading={loading} type="submit">
              {loading ? "Sending..." : "Submit"}
            </GoButton>
          </footer>
        </form>
      </DialogContent>
    </DialogPortal>
  );
};
