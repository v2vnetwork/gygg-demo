"use client";
import React from "react";
import styles from "./Dropdown.module.css";
import { DropdownArrowIcon } from "./Icons";

interface DropdownProps {
  label: string;
  onClick: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, onClick }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <button className={styles.dropdownButton} onClick={onClick}>
        <DropdownArrowIcon />
      </button>
    </div>
  );
};
