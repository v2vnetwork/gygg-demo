import { InputHTMLAttributes } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
};