import React from "react";
import styles from "./MessageThread.module.css";
import Image from 'next/image';

const MessageThread: React.FC = () => {
  return (
    <div className={styles.thread}>
      <article className={styles.message}>
      <Image
          src="/assets/image-555.png"
          alt="Anil K"
          className={styles.avatar}
        />
        <div className={styles.messageContent}>
          <div className={styles.messageHeader}>
            <h3 className={styles.userName}>Anil.K</h3>
            <time className={styles.timestamp}>Today, 8.20pm</time>
          </div>
          <p className={styles.messageText}>Hey there!</p>
        </div>
      </article>

      <div className={styles.receivedMessages}>
        <div className={styles.messageGroup}>
          <p className={styles.receivedText}>Hello Anil</p>
          <time className={styles.timestamp}>Today, 8.33pm</time>
        </div>
        <div className={styles.messageGroup}>
          <p className={styles.receivedText}>How are you doing today?</p>
          <time className={styles.timestamp}>Today, 8.34pm</time>
        </div>
      </div>

      <article className={styles.message}>
        <Image
          src="/assets/image-555.png"
          alt="Anil K"
          className={styles.avatar}
        />
        <div className={styles.messageContent}>
          <p className={styles.messageText}>
            Good thanks! dId you read my new post yet?
          </p>
        </div>
      </article>

      <div className={styles.receivedMessages}>
        <div className={styles.messageGroup}>
          <p className={styles.receivedText}>Not yet haha</p>
        </div>
      </div>

      <article className={styles.message}>
      <Image
          src="/assets/image-555.png"
          alt="Anil K"
          className={styles.avatar}
        />
        <div className={styles.messageContent}>
          <div className={styles.messageHeader}>
            <h3 className={styles.userName}>Anil.K</h3>
            <time className={styles.timestamp}>Today, 8.34pm</time>
          </div>
          <p className={styles.messageText}>hahahahaha!</p>
        </div>
      </article>
    </div>
  );
};

export default MessageThread;
