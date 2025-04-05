import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './profilesetup4.module.css';
import ProgressHeader from '@/components/Tasker/ProfileSetup/ProgressHeader';
import { InputField } from '@/components/Tasker/ProfileSetup/InputField';

const ProfileSetup4 = () => {
  const [step, setStep] = useState(4);
  const router = useRouter();
  const [taskRate, setTaskRate] = useState('');
  const [availability, setAvailability] = useState('');

  const handleNavigation = (direction: 'back' | 'next') => {
    if (direction === 'back') {
      setStep((prev) => prev - 1);
      router.push(`/tasker/profilesetup${step - 1}`);
    } else if (direction === 'next') {
      if (step === 5) {
        router.push('/socialpage');
      } else {
        setStep((prev) => prev + 1);
        router.push(`/tasker/profilesetup${step + 1}`);
      }
    }
  };

  // Generate the task rate range options
  const rateRanges = [];
  for (let start = 20; start < 100; start += 5) {
    const end = start + 5;
    rateRanges.push(`${start}-${end}`);
  }

  return (
    <div className={styles.container}>
      <ProgressHeader step={step} totalSteps={5} onNavigate={handleNavigation} />

      <main className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>Availability and Rate</h1>
          <p className={styles.subtitle}>That will help us better set up your account for you.</p>

          {/* Task Rate Dropdown */}
          <div className={styles.inputField}>
            <label className={styles.inputLabel}>
              What is your task rate range? We recommend picking a reasonable rate so you can get hired.
            </label>
            <select
              className={styles.inputDropdown}
              value={taskRate}
              onChange={(e) => setTaskRate(e.target.value)}
            >
              <option value="">Select your rate</option>
              {rateRanges.map((range) => (
                <option key={range} value={range}>
                  ${range}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Input */}
          <InputField
            label="How often are you available for tasks?"
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup4;
