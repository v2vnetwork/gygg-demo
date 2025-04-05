import React from "react";
import styles from "./SearchHeader.module.css";

export const SearchHeader: React.FC = () => {
  return (
    <header className={styles.searchHeader}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1280a9927158f9169292f3ca7fc5bc5a3832285?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            className={styles.searchIcon}
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search Tasks"
            className={styles.searchInput}
          />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
    </header>
  );
};
