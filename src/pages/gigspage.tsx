"use client";
import React from "react";
import styles from "./gigpage.module.css";
import { TaskList } from "../components/GigsPage/TaskList";
import Header from "@/components/Shared/Header";
import ProfileSidebar from "@/components/Shared/ProfileSidebar";

export const GigsPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <Header />
          <div className={styles.contentLayout}>
            <ProfileSidebar page="gigspage" />
            <div className={styles.taskList}>
            <TaskList />
            </div>
          </div>
      </main>
    </>
  );
};

export default GigsPage;
