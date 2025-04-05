import React from "react";
import styles from "./MessageInput.module.css";

const MessageInput: React.FC = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Type your message here..."
        className={styles.input}
      />
      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c6feeb206f099e83c3ba477a17b7f44c34bde?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            alt="Attachment"
            className={styles.actionIcon}
          />
        </button>
        <button className={styles.actionButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/968dc3b6bd68e854d610f52001283a10f8dbf4e7?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            alt="Send"
            className={styles.actionIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
