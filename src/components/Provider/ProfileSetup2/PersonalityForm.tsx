"use client";
import React, { useState } from "react";
import styles from "./PersonalityForm.module.css";
import { TagInput } from "./TagInput";
import { Dropdown } from "./Dropdown";

export const PersonalityForm: React.FC = () => {
  const [hobbies] = useState([
    { id: "1", label: "Reading" },
    { id: "2", label: "Gardening" },
  ]);

  const handleRemoveHobby = (id: string) => {
    // Implementation for removing hobby
  };

  const handleOpenHobbies = () => {
    // Implementation for opening hobbies dropdown
  };

  const handleOpenPersonality = () => {
    // Implementation for opening personality dropdown
  };

  const handleOpenPeople = () => {
    // Implementation for opening people preferences dropdown
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Personality and Interests</h1>
        <p className={styles.description}>
          That will help us better account setup for you
        </p>
      </header>

      <form className={styles.form}>
        <TagInput
          label="What are your hobbies?"
          tags={hobbies}
          onRemoveTag={handleRemoveHobby}
          onOpenDropdown={handleOpenHobbies}
        />

        <Dropdown
          label="How would you describe yourself?"
          onClick={handleOpenPersonality}
        />

        <Dropdown
          label="What kind of people do you enjoy spending time with?"
          onClick={handleOpenPeople}
        />
      </form>
    </main>
  );
};
