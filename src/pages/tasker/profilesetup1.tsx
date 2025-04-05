import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './profilesetup1.module.css';
import ProgressHeader from '@/components/Tasker/ProfileSetup/ProgressHeader';
import { InputField } from '@/components/Tasker/ProfileSetup/InputField';
import { TaskSelector } from '@/components/Tasker/ProfileSetup/TaskSelector';

const ProfileSetup = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  // Dummy data for the first and last name
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  const handleNavigation = (direction: 'back' | 'next') => {
    if (direction === 'back') {
      // Handle back navigation based on the current step
      if (step === 1) {
        router.push('/signupform'); // Go to the SignupForm page on back from ProfileSetup
      } else {
        setStep(prev => prev - 1);
        router.push(`/tasker/profilesetup${step - 1}`); // Navigate back to the previous step
      }
    } else if (direction === 'next') {
      // Handle next navigation based on the current step
      if (step === 5) {
        // If it's the last step, you can handle the final navigation (e.g., to dashboard or finish)
        router.push('/socialpage');
      } else {
        setStep(prev => prev + 1);
        router.push(`/tasker/profilesetup${step + 1}`); // Navigate to the next profile setup step
      }
    }
  };

  return (
    <div className={styles.container}>
      <ProgressHeader step={step} totalSteps={5} onNavigate={handleNavigation} />

      <main className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>Tell us about yourself</h1>
          <p className={styles.subtitle}>This will help us set up your account better.</p>

          <div className={styles.grid}>
            <InputField label="First name*" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <InputField label="Last name*" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>

          <TaskSelector />
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup;
