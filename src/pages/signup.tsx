import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./signup.module.css";
import Image from 'next/image';

const SignUp: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    if (!role) {
      setMessage("Please select a role");
      return;
    }
    router.push('/signupform');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.logo}>GYGG</div>
        <h2 className={styles.title}>Join as a Tasker or Provider</h2>
        <div className={styles.cardContainer}>
          <div 
            className={`${styles.card} ${role === "tasker" ? styles.selected : ""}`} 
            onClick={() => setRole("tasker")}
          >
            <Image src="/assets/briefcase.svg" alt="Tasker" className={styles.cardLogo} />
            <h3 className={styles.cardTitle}>Tasker</h3>
            <p className={styles.cardDescription}>Some basic description about Tasker</p>
          </div>
          <div 
            className={`${styles.card} ${role === "provider" ? styles.selected : ""}`} 
            onClick={() => setRole("provider")}
          >
            <Image src="/assets/user.svg" alt="Provider" className={styles.cardLogo} />
            <h3 className={styles.cardTitle}>Provider</h3>
            <p className={styles.cardDescription}>Some basic description about provider</p>
          </div>
        </div>
        <button className={styles.signupButton} onClick={handleButtonClick}>
          Sign Up
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
