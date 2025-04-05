"use client";
import React from "react";
import styles from "./ConversationsList.module.css";
import Image from 'next/image';


const ConversationsList: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.conversationsList}>
        <article className={styles.conversation}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0478936445ac8fab43fe216e1641e176afd9f24?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            alt="Anil K"
            className={styles.avatar}
          />
          <div className={styles.messagePreview}>
            <h3 className={styles.userName}>Anil.K</h3>
            <p className={styles.lastMessage}>Hahahahah!</p>
          </div>
          <div className={styles.messageInfo}>
            <time className={styles.timestamp}>Today, 9.52pm</time>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f64ac6ebcfaf2bf926a1efc9051c7e9f579695?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
              alt="More"
              className={styles.moreIcon}
            />
          </div>
        </article>

        <hr className={styles.divider} />

        <article className={styles.conversation}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b1d05e68a06cc92a7b71aa9d422657f30d001ea?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            alt="Chuuthiya A"
            className={styles.avatar}
          />
          <div className={styles.messagePreview}>
            <h3 className={styles.userName}>Chuuthiya.A</h3>
            <p className={styles.lastMessage}>It&apos;s not going to happen</p>
          </div>
          <time className={styles.timestamp}>Febuary, 9.52pm</time>
        </article>

        <hr className={styles.divider} />

        <article className={styles.conversation}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82cc2ec912db74589588653ff4335cda7e13b084?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            alt="Victoria H"
            className={styles.avatar}
          />
          <div className={styles.messagePreview}>
            <h3 className={styles.userName}>Victoria. H</h3>
            <p className={styles.lastMessage}>Okay, Michelle let's see...</p>
          </div>
          <time className={styles.timestamp}>Febuary, 9.52pm</time>
        </article>
      </div>
    </aside>
  );
};

export default ConversationsList;
