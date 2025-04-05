"use client";
import React from "react";
import styles from "./profilepage.module.css";
import Header from "../components/Shared/Header";
import ProfileInfo from "../components/SocialPage/ProfileInfo";
import AboutSection from "../components/ProfilePage/AboutSection";
import PostsSection from "../components/ProfilePage/PostsSection";
import AlbumSection from "../components/ProfilePage/AlbumSection";
import ReviewsSection from "@/components/ProfilePage/ReviewSection";

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <ProfileInfo />
        <AboutSection />
        <PostsSection />
        <AlbumSection />
        <ReviewsSection />
      </main>
    </div>
  );
};

export default ProfilePage;
