"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./profilesetup5.module.css";
import { ProgressBar } from "../../components/Provider/ProfileSetup5/ProgressBar";
import { NavigationHeader } from "../../components/Provider/ProfileSetup5/NavigationHeader";
import { TimelineSelector } from "../../components/Provider/ProfileSetup5/TimelineSelector";
import { TitleInput } from "../../components/Provider/ProfileSetup5/TitleInput";
import { CategorySelector } from "../../components/Provider/ProfileSetup5/CategorySelector";
import Image from 'next/image';

export default function ProfileSetup5() {
  const [formData, setFormData] = useState({
    timeline: "fixed",
    title: "Dog sitting for a day",
    category: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2ffb06294b1842ef39768c2189fe8393438629"
            alt="GYGG Logo"
            className={styles.logo}
          />
        </header>

        <ProgressBar current={5} total={8} label="Gig post" />

        <NavigationHeader />

        <section className={styles.formContainer}>
          <h1 className={styles.title}>Create Your First Gig Post</h1>

          <TimelineSelector
            value={formData.timeline}
            onChange={(value) => handleInputChange("timeline", value)}
          />

          <TitleInput
            value={formData.title}
            onChange={(value) => handleInputChange("title", value)}
          />

          <CategorySelector
            value={formData.category}
            onChange={(value) => handleInputChange("category", value)}
          />
        </section>
      </main>
    </>
  );
}
