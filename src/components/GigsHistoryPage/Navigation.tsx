import React from "react";
import styles from "./Navigation.module.css";

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <a href="#" className={styles.navLink}>
        Home
      </a>
      <hr className={styles.divider} />
      <a href="#" className={styles.navLink}>
        Messages
      </a>
      <div className={styles.activeSection}>
        <hr className={styles.divider} />
        <a href="#" className={styles.navLink}>
          Contracts
        </a>
      </div>
      <hr className={styles.divider} />
      <a href="#" className={styles.navLink}>
        Gigs
      </a>
      <hr className={styles.divider} />
    </nav>
  );
};
