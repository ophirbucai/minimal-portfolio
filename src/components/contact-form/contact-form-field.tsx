import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import { ContactFormValidationError } from "./contact-form-validation-error";
import styles from "./contact-form.module.css";

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
        aria-describedby={hasError ? `${name}-error` : undefined}
        aria-invalid={hasError ? "true" : "false"}
        className={styles[Component === "textarea" ? "textarea" : "input"]}
        id={name}
        placeholder={placeholder}
        rows={rows}
        type={type}
      />
      <ContactFormValidationError name={name} />
    </fieldset>
  );
};
