import styles from "./FormInput.module.css";

interface FormInputProps {
  label: string;
  type?: string;
  required?: boolean;
}

export function FormInput({
  label,
  type = "text",
  required = false,
}: FormInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <input type={type} required={required} className={styles.input} />
    </div>
  );
}
