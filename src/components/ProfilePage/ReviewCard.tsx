import React from "react";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  name: string;
  job: string;
  rating: number;
  stars: number;
  date: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, job, rating, stars, date, review }) => {
  return (
    <div className={styles.reviewItem}>
      {/* Row 1: Name */}
      <div className={styles.reviewRow}>
        <h3 className={styles.name}>{name}</h3>
      </div>

      {/* Row 2: Job, Rating, Stars, Date */}
      <div className={styles.reviewRow}>
        <p className={styles.job}>{job}</p>
        <span className={styles.separator}> |  </span>
        <p className={styles.rating}>{rating.toFixed(1)}</p>
        <span className={styles.separator}>  |  </span>
        <div className={styles.stars}>
          {"★".repeat(stars)}
          {"☆".repeat(5 - stars)}
        </div>
        <span className={styles.separator}>|</span>
        <p className={styles.date}>{date}</p>
      </div>

      {/* Row 3: Review Description */}
      <div className={styles.reviewRow}>
        <p className={styles.reviewText}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
