import React from "react";
import styles from "./TitleInput.module.css";

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TitleInput: React.FC<TitleInputProps> = ({ value, onChange }) => {
  return (
    <section className={styles.container}>
      <label htmlFor="jobTitle" className={styles.label}>
        Write title for your job post
      </label>
      <input
        id="jobTitle"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      <div className={styles.examples}>
        <h4 className={styles.examplesTitle}>Example titles</h4>
        <div className={styles.examplesList}>
          <p className={styles.example}>
            Looking for an experienced assembler to build office furniture
            quickly
          </p>
          <p className={styles.example}>
            Hiring a gardener to maintain and care for outdoor plants and lawns
            in my backyard
          </p>
        </div>
      </div>
    </section>
  );
};
