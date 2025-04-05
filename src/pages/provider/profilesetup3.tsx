"use client";
import * as React from "react";
import styles from "./profilesetup3.module.css";
import ProgressBar from "../../components/Provider/ProfileSetup3/ProgressBar";
import NavigationButtons from "../../components/Provider/ProfileSetup3/NavigationButtons";
import BioTextArea from "../../components/Provider/ProfileSetup3/BioTextArea";
import FileUpload from "../../components/Provider/ProfileSetup3/FileUpload";

const ProfileSetup3: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2ffb06294b1842ef39768c2189fe8393438629"
          alt="GYGG Logo"
          className={styles.logo}
        />

        <ProgressBar current={3} total={8} />
        <NavigationButtons />

        <section className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.title}>Profile Picture and Bio</h1>
            <p className={styles.subtitle}>
              That will help us better account setup for you
            </p>
          </header>

          <BioTextArea />

          <div className={styles.uploadSection}>
            <div className={styles.previewBox}>Preview</div>
            <FileUpload />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileSetup3;
