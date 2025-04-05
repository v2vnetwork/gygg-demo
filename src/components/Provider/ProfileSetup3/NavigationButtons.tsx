import React from "react";
import styles from "./NavigationButtons.module.css";

const NavigationButtons: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <button className={styles.backButton}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.56891 5.17988C9.75891 5.17988 9.94891 5.24988 10.0989 5.39988C10.3889 5.68988 10.3889 6.16988 10.0989 6.45988L4.55891 11.9999L10.0989 17.5399C10.3889 17.8299 10.3889 18.3099 10.0989 18.5999C9.80891 18.8899 9.32891 18.8899 9.03891 18.5999L2.9689 12.5299C2.67891 12.2399 2.67891 11.7599 2.9689 11.4699L9.03891 5.39988C9.18891 5.24988 9.37891 5.17988 9.56891 5.17988Z"
            fill="white"
          />
          <path
            d="M3.67 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75H3.67C3.26 12.75 2.92 12.41 2.92 12C2.92 11.59 3.26 11.25 3.67 11.25Z"
            fill="white"
          />
        </svg>
        Back
      </button>
      <button className={styles.doneButton}>Done</button>
    </nav>
  );
};

export default NavigationButtons;
