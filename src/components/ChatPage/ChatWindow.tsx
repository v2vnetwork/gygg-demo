"use client";
import React from "react";
import styles from "./ChatWindow.module.css";
import ChatHeader from "./ChatHeader";
import MessageThread from "./MessageThread";
import MessageInput from "./MessageInput";

const ChatWindow: React.FC = () => {
  return (
    <section className={styles.chatWindow}>
      <div className={styles.container}>
        <div className={styles.searchPlaceholder} />
        <div className={styles.chatContent}>
          <ChatHeader />
          <MessageThread />
          <MessageInput />
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
