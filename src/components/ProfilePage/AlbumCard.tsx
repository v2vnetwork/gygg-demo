import React from "react";
import styles from "./AlbumCard.module.css";

interface AlbumCardProps {
  image: string;
  caption: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ image, caption }) => {
  return (
    <figure className={styles.albumItem}>
      <img src={image} alt={caption} className={styles.albumImage} />
      <figcaption className={styles.albumCaption}>{caption}</figcaption>
    </figure>
  );
};

export default AlbumCard;
