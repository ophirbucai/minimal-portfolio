import dialogStyles from "@/assets/styles/dialog.module.css";
import { useContactForm } from "@/hooks/useContactForm";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { FormProvider } from "react-hook-form";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { GoButton } from "../go-button/go-button";
import { ContactFormField } from "./contact-form-field";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const form = useContactForm("recaptcha");
  const { formState } = form;

  return (
    <DialogPortal>
      <DialogOverlay className={dialogStyles.dialogOverlay} />
      <DialogContent
        className={dialogStyles.dialogContent}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <header className={dialogStyles.dialogHeader}>
          <div>
            <DialogTitle className={dialogStyles.dialogTitle}>Get in touch</DialogTitle>
            <DialogDescription className={dialogStyles.dialogDescription}>
              Let's build something awesome
            </DialogDescription>
          </div>
          <DialogClose className={dialogStyles.dialogHeaderButton}>
            <AiOutlineCloseCircle />
          </DialogClose>
        </header>

        <FormProvider {...form}>
          <form noValidate className={dialogStyles.dialogBody} onSubmit={form.onSubmit}>
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
              <div className={clsx("g-recaptcha", styles.recaptcha)} id="recaptcha" />
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
