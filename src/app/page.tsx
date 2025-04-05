import React from 'react';
import type { Metadata } from "next";
import styles from './page.module.css';
import LeftComponent from '@/components/LandingPage/LeftComponent';
import RightComponent from '@/components/LandingPage/RightComponent';


export const metadata: Metadata = {
  title: "Home | Gygg",
  description: "Gygg Platform",
};

const HomeScreen: React.FC = () => {
  return (
    <div className={styles.page}>
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default HomeScreen;
