import React from 'react';
import Link from 'next/link';
import styles from './RightComponent.module.css';

const RightComponent: React.FC = () => {
  return (
    <div className={styles.rightComponent}>
      <div className={styles.signupCard}>
        <h1 className={styles.cardTitle}>GYGG</h1>
        <Link href="/signup" passHref>
          <button className={styles.signupButton}>Sign Up</button>
        </Link>
        <Link href="/login" passHref>
          <button className={styles.loginButton}>Log in</button>
        </Link>
        <p className={styles.termsText}>
          By Signing Up you agree to our <Link href="/terms" className={styles.link}>Terms of Use</Link> and <Link href="/privacy" className={styles.link}>Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default RightComponent;