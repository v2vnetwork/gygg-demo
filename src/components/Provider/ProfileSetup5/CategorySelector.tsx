import React from "react";
import styles from "./CategorySelector.module.css";

interface CategorySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  value,
  onChange,
}) => {
  const categories = [
    { id: "pet-care", label: "Pet care" },
    { id: "household", label: "Household services" },
    { id: "assistant", label: "Personal assistant" },
  ];

  return (
    <section className={styles.container}>
      <h3 className={styles.label}>What category does this job belong to?</h3>
      <div className={styles.options}>
        {categories.map((category) => (
          <label key={category.id} className={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={value === category.id}
              onChange={(e) => onChange(e.target.value)}
              className={styles.radioInput}
            />
            <span className={styles.radioControl} />
            <span className={styles.radioText}>{category.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};
