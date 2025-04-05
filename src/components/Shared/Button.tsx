import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  isActive?: boolean; // Add an isActive prop to control the active state
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  isActive = false, // Default to false
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className} ${
    isActive ? styles.active : ""
  }`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;