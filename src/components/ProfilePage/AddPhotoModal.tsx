import React, { useState } from "react";
import styles from "./AddPhotoModal.module.css";

interface AddPhotoModalProps {
  onClose: () => void;
  onAdd: (photo: { image: string; caption: string }) => void;
}

const AddPhotoModal: React.FC<AddPhotoModalProps> = ({ onClose, onAdd }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!selectedFile || !caption) return;

    const newPhoto = {
      image: URL.createObjectURL(selectedFile), // Temporary preview URL
      caption,
    };

    onAdd(newPhoto);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Add Photo</h3>
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </div>

        <div className={styles.modalBody}>
          <p>Add a gig-related photo to showcase your skills to profile viewers.</p>

          <div className={styles.uploadBox}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <label className={styles.uploadLabel}>
              {selectedFile ? selectedFile.name : "Drag and Drop or Browse"}
            </label>
            <p className={styles.fileLimitText}>Max 10 MB files are allowed</p>
          </div>

          <input
            type="text"
            maxLength={20}
            placeholder="Photo Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className={styles.inputField}
          />
          <p className={styles.captionLimitText}>20 characters max</p>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button
            className={styles.saveButton}
            onClick={handleSubmit}
            disabled={!selectedFile || !caption}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoModal;
