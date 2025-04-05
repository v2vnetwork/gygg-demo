"use client";
import * as React from "react";
import styles from "./profilesetup.module.css";
import { ProgressBar } from "../../components/Provider/ProfileSetup/ProgressBar";
import { FormInput } from "../../components/Provider/ProfileSetup/FormInput";
import Image from 'next/image';

function ProfileSetup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleBack = () => {
    // Handle back navigation
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2ffb06294b1842ef39768c2189fe8393438629"
          alt="GYGG Logo"
          className={styles.logo}
        />

        <div className={styles.progressContainer}>
          <ProgressBar />
        </div>

        <button onClick={handleBack} className={styles.backButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.56891 5.17988C9.75891 5.17988 9.94891 5.24988 10.0989 5.39988C10.3889 5.68988 10.3889 6.16988 10.0989 6.45988L4.55891 11.9999L10.0989 17.5399C10.3889 17.8299 10.3889 18.3099 10.0989 18.5999C9.80891 18.8899 9.32891 18.8899 9.03891 18.5999L2.9689 12.5299C2.67891 12.2399 2.67891 11.7599 2.9689 11.4699L9.03891 5.39988C9.18891 5.24988 9.37891 5.17988 9.56891 5.17988Z"
              fill="white"
            />
            <path
              d="M3.67 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75H3.67C3.26 12.75 2.92 12.41 2.92 12C2.92 11.59 3.26 11.25 3.67 11.25Z"
              fill="white"
            />
          </svg>
          <span className={styles.backButtonText}>Back</span>
        </button>

        <section className={styles.formContainer}>
          <div className={styles.formContent}>
            <h1 className={styles.formTitle}>Tell us about yourself</h1>
            <p className={styles.formDescription}>
              That will help us better account setup for you
            </p>
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <FormInput label="First name*" type="text" required />
              <FormInput label="Last name*" type="text" required />
              <FormInput label="Age*" type="number" required />
              <FormInput label="Postal code*" type="text" required />
            </form>
          </div>
          <button type="submit" className={styles.nextButton}>
            Next
          </button>
        </section>
      </main>
    </>
  );
}

export default ProfileSetup;
