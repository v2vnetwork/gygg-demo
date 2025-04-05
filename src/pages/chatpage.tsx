"use client";
import React from "react";
import styles from "./chatpage.module.css";
import ConversationsList from "../components/ChatPage/ConversationsList";
import ChatWindow from "../components/ChatPage/ChatWindow";
import Header from "@/components/Shared/Header";

const ChatPage: React.FC = () => {
  return (
    <main className={styles.layout}>
      <Header />
        <div className={styles.contentGrid}>
          <ConversationsList />
          <ChatWindow />
        </div>
    </main>
  );
};

export default ChatPage;
