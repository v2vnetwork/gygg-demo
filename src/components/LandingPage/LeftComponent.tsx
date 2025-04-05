"use client";

import React from 'react';
import styles from './LeftComponent.module.css';
import Image from 'next/image';

const LeftComponent: React.FC = () => {
  return (
    <div className={styles.leftComponent}>
      <div className={styles.borderBox}></div>
      <h2 className={styles.leftComponentText}>
        Tasks with <span className={styles.text}>Meaning,</span> Connections that <span className={styles.text}>Last</span>
      </h2>
      {/* Add Image Below the Text */}
      <div className={styles.imageContainer}>
        <Image src="/assets/people.png" alt="Image" className={styles.image} />
      </div>
    </div>
  );
};

export default LeftComponent;
