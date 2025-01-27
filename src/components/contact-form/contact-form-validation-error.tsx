import { useFormContext } from "react-hook-form";
import styles from "./contact-form.module.css";

export const ContactFormValidationError = ({ name }: { name: string }) => {
  const {
    formState: { errors, touchedFields },
  } = useFormContext();

  if (!errors[name] || !touchedFields[name]) return null;

  return (
    <span className={styles.validationError} id={`${name}-error`} role="alert">
      {errors[name]?.message as string}
    </span>
  );
};
