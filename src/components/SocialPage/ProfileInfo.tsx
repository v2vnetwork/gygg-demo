import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Michelle Baskin");
  const [services, setServices] = useState(
    "Household Services, Personal Assistance, Pet Care"
  );
  const [location, setLocation] = useState("Thornhill, Ontario");
  const [gigs, setGigs] = useState([
    "Dog Walking",
    "Shelf Mounting",
    "Dog Grooming",
    "Gardening",
    "Grocery Shopping",
  ]);

  const [editedName, setEditedName] = useState(name);
  const [editedServices, setEditedServices] = useState(services);
  const [editedLocation, setEditedLocation] = useState(location);
  const [editedGigs, setEditedGigs] = useState(gigs.join(", "));

  const openModal = () => {
    setEditedName(name);
    setEditedServices(services);
    setEditedLocation(location);
    setEditedGigs(gigs.join(", "));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setName(editedName);
    setServices(editedServices);
    setLocation(editedLocation);
    setGigs(editedGigs.split(", ").map((gig) => gig.trim()));
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <section className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <img
          src="/edit.svg"
          alt="Edit"
          className={styles.editIcon}
          onClick={openModal}
        />
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileImageContainer}>
          <img
            src="/assets/image-109.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>

        <div>
          <div className={styles.profileDetails}>
            <h1 className={styles.profileName}>{name}</h1>
            <p className={styles.profileServices}>{services}</p>
            <div className={styles.profileLocation}>
              <img src="/location.svg" alt="Location" className={styles.locationIcon} />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>Gigs</h2>
          <div className={styles.skillsList}>
            {gigs.map((gig, index) => (
              <span key={index} className={styles.skillTag}>
                {gig}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Edit Profile</h3>
              <button className={styles.closeButton} onClick={closeModal}>✖</button>
            </div>
            <div className={styles.modalBody}>
              <label>Name:</label>
              <input
                type="text"
                className={styles.inputField}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />

              <label>Services:</label>
              <input
                type="text"
                className={styles.inputField}
                value={editedServices}
                onChange={(e) => setEditedServices(e.target.value)}
              />

              <label>Location:</label>
              <input
                type="text"
                className={styles.inputField}
                value={editedLocation}
                onChange={(e) => setEditedLocation(e.target.value)}
              />

              <label>Gigs (comma-separated):</label>
              <textarea
                className={styles.textArea}
                value={editedGigs}
                onChange={(e) => setEditedGigs(e.target.value)}
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
        </div>
      )}
    </section>
  );
};

export default ProfileInfo;
