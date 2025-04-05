import React from "react";
import styles from "./BioTextArea.module.css";

const BioTextArea: React.FC = () => {
  return (
    <div className={styles.bioSection}>
      <label htmlFor="bio" className={styles.bioLabel}>
        Tell us a little more about yourself? What do you enjoy most about
        helping others? (This will show on your profile bio on you page)
      </label>
      <textarea id="bio" className={styles.bioTextArea} rows={4} />
    </div>
  );
};

export default BioTextArea;
