import React from "react";
import styles from "./TimelineSelector.module.css";

interface TimelineSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimelineSelector: React.FC<TimelineSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.label}>What is the task timeline type?</h3>
      <div className={styles.options}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="timeline"
            value="open-ended"
            checked={value === "open-ended"}
            onChange={(e) => onChange(e.target.value)}
            className={styles.radioInput}
          />
          <span className={styles.radioControl} />
          <span className={styles.radioText}>Open-ended</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="timeline"
            value="fixed"
            checked={value === "fixed"}
            onChange={(e) => onChange(e.target.value)}
            className={styles.radioInput}
          />
          <span className={styles.radioControl} />
          <span className={styles.radioText}>Fixed</span>
        </label>
      </div>
    </section>
  );
};
