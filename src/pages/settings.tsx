"use client";
import React from "react";
import styles from "./profilepage.module.css";
import Header from "../components/Shared/Header";
import ProfileInfo from "../components/SocialPage/ProfileInfo";
import PersonalInfoForm from "@/components/Settings/PersonalInfoForm";

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <ProfileInfo />
        <PersonalInfoForm />
      </main>
    </div>
  );
};

export default ProfilePage;
