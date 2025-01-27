import { useContactForm } from "@/hooks/useContactForm";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { GoButton } from "../go-button/go-button";
import styles from "./contact-form.module.css";
import { FormProvider } from "react-hook-form";
import { ContactFormField } from "./contact-form-field";

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
          <form className={styles.contactForm} onSubmit={form.onSubmit} noValidate>
            <ContactFormField
              name="email"
              label="Email"
              type="email"
              placeholder="hello@company.com"
            />

            <ContactFormField name="name" label="Name" placeholder="Your name" />

            <ContactFormField
              name="subject"
              label="Subject"
              placeholder="What can we build together?"
            />

            <ContactFormField
              name="message"
              label="Message"
              rows={7}
              placeholder="Tell me about your project needs, tech stack, and timeline"
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
