import React from "react";
import Image from "next/image";
import styles from "./ChatHeader.module.css";

const ChatHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16f750f51be999c8f0924f5734794d11d5aba7a?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
        alt="Anil K"
        className={styles.avatar}
        width={50}  // You can adjust the width and height as per your design
        height={50} // Same here
        priority // Optional: for optimizing critical images like profile pictures
      />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>Anil.K</h2>
        <div className={styles.status}>
          <div className={styles.statusIndicator} />
          <span>Online</span>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
