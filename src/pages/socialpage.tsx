"use client";
import React from "react";
import styles from "./socialpage.module.css";
import Header from "../components/Shared/Header";
import Feed from "../components/SocialPage/Feed";
import ProfileSidebar from "../components/Shared/ProfileSidebar";

const SocialPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentWrapper}>
        <ProfileSidebar page="socialpage"/>
        <Feed />
      </div>
    </div>
  );
};

export default SocialPage;
