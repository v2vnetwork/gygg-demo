import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span>Profile set up</span>
        <span>
          {current}/{total}
        </span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
