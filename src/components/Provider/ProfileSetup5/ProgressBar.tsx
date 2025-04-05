import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
}) => {
  const progress = (current / total) * 100;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.label}>{label}</h2>
        <span className={styles.progress}>
          {current}/{total}
        </span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};
