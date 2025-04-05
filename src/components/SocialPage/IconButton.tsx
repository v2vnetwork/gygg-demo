import React, { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button className={`${styles.iconButton} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
