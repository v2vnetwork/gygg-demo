import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Profile set up</h2>
        <span className={styles.progress}>
          {current}/{total}
        </span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
};
