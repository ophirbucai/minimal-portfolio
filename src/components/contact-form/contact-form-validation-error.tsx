import { useFormContext } from "react-hook-form";
import styles from './contact-form.module.css';

export const ContactFormValidationError = ({ name }: { name: string }) => {
    const {
      formState: { errors, touchedFields },
    } = useFormContext();
  
    if (!errors[name] || !touchedFields[name]) return null;
  
    return (
      <span id={`${name}-error`} className={styles.validationError} role="alert">
        {errors[name]?.message as string}
      </span>
    );
  };