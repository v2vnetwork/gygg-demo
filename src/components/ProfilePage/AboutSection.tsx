import React, { useState } from "react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState(`
    Reliable Gigger | Pet Sitting 🐾, Grocery Shopping 🛒 & Furniture Assembly 🛠️
  
    As a dedicated and versatile Gigger, I specialize in providing pet sitting services, grocery shopping, and furniture assembly. With a passion for helping others, I ensure your pets are cared for with love and attention 🐶, while also handling your shopping and assembly tasks efficiently.
  
    I take pride in offering a stress-free experience for clients, providing prompt, reliable, and high-quality service. Whether it's keeping your furry friends happy 🐱, getting your groceries delivered 🥕, or assembling that new piece of furniture 🛋️, I'm here to make your life easier.
  
    Let me help with your next task—I'm ready to lend a hand! 🙌
  `);
  const [editedBio, setEditedBio] = useState(bio);

  const openModal = () => {
    setEditedBio(bio); // Populate the textarea with the current bio
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setBio(editedBio.trim()); // Trim whitespace
    closeModal();
  };

  const handleCancel = () => {
    setEditedBio(bio); // Reset the textarea content
    closeModal();
  };

  return (
    <section className={styles.aboutCard}>
      <div className={styles.aboutHeader}>
        <h2>About Me</h2>
        {bio && ( // Show edit button only if bio exists
          <img
            src="/edit.svg"
            alt="Edit"
            className={styles.editIcon}
            onClick={openModal}
          />
        )}
      </div>

      <div className={styles.aboutContent}>
        {bio ? (
          <p>{bio}</p>
        ) : (
          <div className={styles.noBio}>
            <p>Add an introduction about yourself to increase your chances of getting hired</p>
            <button className={styles.addButton} onClick={openModal}>
              Add
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Edit Bio</h3>
              <button className={styles.closeButton} onClick={closeModal}>
                ✖
              </button>
            </div>
            <p className={styles.modalPrompt}>
              Use this space to show gig seekers you have the skills and experience they're looking for.
            </p>
            <textarea
              className={styles.textArea}
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
            />
            <div className={styles.modalActions}>
              <button className={styles.cancelButton} onClick={handleCancel}>
                Cancel
              </button>
              <button className={styles.saveButton} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
