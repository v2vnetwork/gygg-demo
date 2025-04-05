import React, { useState } from "react";
import styles from "./AlbumSection.module.css";
import AlbumCard from "./AlbumCard";
import AddPhotoModal from "./AddPhotoModal"; // Import modal
import Image from 'next/image';

interface Album {
  image: string;
  caption: string;
}

const initialAlbumData: Album[] = [
  { image: "/assets/image-587.png", caption: "Daily stroll 🐾" },
  { image: "/assets/image-588.png", caption: "POV" },
  { image: "/assets/image-589.png", caption: "Oddly satisfying 🥕🥕🥕" },
  { image: "/assets/image-590.png", caption: "Took only about 6 hours.." },
];

const AlbumSection: React.FC = () => {
  const [albumData, setAlbumData] = useState<Album[]>(initialAlbumData);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(albumData.length / itemsPerPage);

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleAddPhoto = (newPhoto: Album) => {
    setAlbumData((prevData) => [...prevData, newPhoto]);
    setShowModal(false);
  };

  return (
    <section className={styles.albumCard}>
      <div className={styles.albumHeader}>
        <h2>Album</h2>
        {albumData.length > 0 && (
          <button className={styles.addButton} onClick={handleAddClick}>
            <Image src="/add-circle.svg" alt="Add" className={styles.addIcon} />
          </button>
        )}
      </div>

      {albumData.length > 0 ? (
        <>
          <div className={styles.albumGrid}>
            {albumData
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((album, index) => (
                <AlbumCard key={index} image={album.image} caption={album.caption} />
              ))}
          </div>

          <div className={styles.paginationDots}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentPage ? styles.activeDot : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noAlbums}>
          <p>Add task-related photos to your profile to increase your chances of getting hired</p>
          <button className={styles.addTaskButton} onClick={handleAddClick}>
            Add
          </button>
        </div>
      )}

      {showModal && <AddPhotoModal onClose={() => setShowModal(false)} onAdd={handleAddPhoto} />}
    </section>
  );
};

export default AlbumSection;
