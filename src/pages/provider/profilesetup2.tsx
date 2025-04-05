"use client";
import React from "react";
import styles from "./profilesetup2.module.css";
import { ProgressBar } from "../../components/Provider/ProfileSetup2/ProgressBar";
import { NavigationButtons } from "../../components/Provider/ProfileSetup2/NavigationButtons";
import { PersonalityForm } from "../../components/Provider/ProfileSetup2/PersonalityForm";
import Image from 'next/image';

export const ProfileSetup2: React.FC = () => {
  const handleBack = () => {
    // Implementation for back navigation
  };

  const handleNext = () => {
    // Implementation for next navigation
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2ffb06294b1842ef39768c2189fe8393438629"
          alt="GYGG Logo"
          className={styles.logo}
        />
        <ProgressBar current={2} total={8} />
        <NavigationButtons onBack={handleBack} onNext={handleNext} />
        <PersonalityForm />
      </div>
    </>
  );
};

export default ProfileSetup2;
