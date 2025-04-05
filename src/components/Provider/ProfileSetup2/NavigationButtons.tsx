import React from "react";
import styles from "./NavigationButtons.module.css";
import { BackArrowIcon } from "./Icons";

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
}) => {
  return (
    <nav className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <BackArrowIcon />
        <span className={styles.backText}>Back</span>
      </button>
      <button onClick={onNext} className={styles.nextButton}>
        Next
      </button>
    </nav>
  );
};
