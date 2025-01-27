import { useContactForm } from "@/hooks/useContactForm";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { FormProvider } from "react-hook-form";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { GoButton } from "../go-button/go-button";
import { ContactFormField } from "./contact-form-field";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const form = useContactForm();
  const { formState } = form;

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

        <FormProvider {...form}>
          <form noValidate className={styles.contactForm} onSubmit={form.onSubmit}>
            <ContactFormField
              label="Email"
              name="email"
              placeholder="hello@company.com"
              type="email"
            />

            <ContactFormField label="Name" name="name" placeholder="Your name" />

            <ContactFormField
              label="Subject"
              name="subject"
              placeholder="What can we build together?"
            />

            <ContactFormField
              label="Message"
              name="message"
              placeholder="Tell me about your project needs, tech stack, and timeline"
              rows={7}
            />

            <footer className={styles.footer}>
              {formState.isSubmitSuccessful && (
                <span className={styles.success}>
                  <AiOutlineCheckCircle /> Thanks for reaching out! I'll get back to you soon.
                </span>
              )}
              <GoButton
                className={styles.submitButton}
                loading={formState.isSubmitting}
                type="submit"
              >
                {formState.isSubmitting ? "Sending..." : "Submit"}
              </GoButton>
            </footer>
          </form>
        </FormProvider>
      </DialogContent>
    </DialogPortal>
  );
};
