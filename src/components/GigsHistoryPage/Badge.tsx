import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  status: "Active" | "Ended";
}

export const Badge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <span
      className={`${styles.badge} ${status === "Active" ? styles.active : styles.ended}`}
    >
      {status}
    </span>
  );
};
