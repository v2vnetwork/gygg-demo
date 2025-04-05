"use client";

import React from "react";
import styles from "./gigshistory.module.css";
import { SearchHeader } from "../components/GigsHistoryPage/SearchHeader";
import { Navigation } from "../components/GigsHistoryPage/Navigation";
import { ProfileCard } from "../components/GigsHistoryPage/ProfileCard";
import { ContractsList } from "../components/GigsHistoryPage/ContractsList";
import Image from 'next/image';

export const GigsHistoryPage: React.FC = () => {
  return (
    <main className={styles.pageContainer}>
      <SearchHeader />
      <section className={styles.logoSection}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f059fd00a4a0506f0e81ff7333367edb30619f?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
          className={styles.mainLogo}
          alt="Company Logo"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7c1d590bef583e391533eb83995a59a1dce3db8?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
          className={styles.decorativeLogo}
          alt="Decorative Element"
        />
      </section>
      <div className={styles.contentContainer}>
        <div className={styles.columnsWrapper}>
          <Navigation />
          <ProfileCard />
          <ContractsList />
        </div>
      </div>
    </main>
  );
};

export default GigsHistoryPage;
