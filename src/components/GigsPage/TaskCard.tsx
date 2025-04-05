import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import Image from 'next/image';
import Link from 'next/link';

interface TaskCardProps {
  image: string;
  author: string;
  title: string;
  rate: string;
  location: string;
  postedTime: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  image,
  author,
  title,
  rate,
  location,
  postedTime,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className={styles.taskCard} onClick={() => setIsModalOpen(true)}>
        <Image src={image} alt="Task" className={styles.taskImage} width={500} height={300} />
        <div className={styles.taskContent}>
          <p className={styles.taskAuthor}>{author}</p>
          <Link href="#" className={styles.taskTitle}>
            {title}
          </Link>
          <p className={styles.taskRate}>{rate}</p>
          <div className={styles.taskDetails}>
            <div className={styles.taskLocation}>
              <Image 
                src="/location.svg" 
                className={styles.locationIcon} 
                alt="Location" 
                width={16} 
                height={16}
              />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Gig Details</h2>
              <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                <Image 
                  src="/close.svg" 
                  alt="Close" 
                  className={styles.closeIcon} 
                  width={16} 
                  height={16}
                />
              </button>
            </div>

            <div className={styles.mainContent}>
              <div className={styles.taskTitle}>
                <p>Dog Sitting</p>
              </div>

              {/* Name and posted time */}
              <div className={styles.profileTopRow}>
                <div className={styles.profileLeft}>
                  <p className={styles.taskAuthor}>{author}</p>
                  <Link href="/" className={styles.viewProfile}>
                    View Profile
                  </Link>
                </div>
                <span className={styles.taskTime}>{postedTime}</span>
              </div>
              
              {/* Dummy Description */}
              <p className={styles.description}>
                Looking for a reliable dog sitter to take care of my baby Mia (Puppy Poodle) while I am away for work. 
              </p> 

              {/* Row with Location, Rate, and Time */}
              <div className={styles.taskRow}>
                <div className={styles.taskLocation}>
                  <Image 
                    src="/location.svg" 
                    className={styles.locationIcon} 
                    alt="Location" 
                    width={16} 
                    height={16}
                  />
                  <span>{location}</span>
                </div>
                <p className={styles.taskTime}>Pay <span className={styles.taskRate}>{rate}</span></p>
                <span className={styles.taskTime}>Need for <span className={styles.taskRate}>2hrs</span></span>
              </div>

              {/* Line above Apply */}
              <div className={styles.line}></div>

              <button className={styles.applyButton}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};