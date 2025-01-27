import { useFormContext } from "react-hook-form";
import styles from "./contact-form.module.css";
import { ContactFormValidationError } from "./contact-form-validation-error";
import { clsx } from "clsx";

type Props = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  rows?: number;
};

export const ContactFormField = ({ name, label, type = "text", placeholder, rows }: Props) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const hasError = errors[name] && (touchedFields[name] || type === "email");
  const Component = rows ? "textarea" : "input";

  return (
    <fieldset className={clsx(styles.fieldset, hasError && styles.error)}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Component
        {...register(name)}
        id={name}
        className={styles[Component === "textarea" ? "textarea" : "input"]}
        type={type}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />
      <ContactFormValidationError name={name} />
    </fieldset>
  );
};
