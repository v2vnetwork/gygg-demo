import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './profilesetup2.module.css';
import ProgressHeader from '@/components/Tasker/ProfileSetup/ProgressHeader';
import { TaskSelector } from '@/components/Tasker/ProfileSetup/TaskSelector';

const specificTasks = [
  'Furniture assembly and disassembly',
  'Home office cable management',
  'Setting up home entertainment systems',
  'Deep cleaning and organizing',
  'Yard work and gardening',
  'BBQ grill cleaning',
  'Laundry folding and ironing',
  'Closet or storage decluttering',
  'Light maintenance tasks (e.g., hanging shelves)',
];

const ProfileSetup2 = () => {
  const [step, setStep] = useState(2);
  const router = useRouter();
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleNavigation = (direction: 'back' | 'next') => {
    if (direction === 'back') {
      if (step === 1) {
        router.push('/signupform');
      } else {
        setStep((prev) => prev - 1);
        router.push(`/tasker/profilesetup${step - 1}`);
      }
    } else if (direction === 'next') {
      if (step === 5) {
        router.push('/socialpage');
      } else {
        setStep((prev) => prev + 1);
        router.push(`/tasker/profilesetup${step + 1}`);
      }
    }
  };

  const handleTaskChange = (task: string) => {
    setSelectedTasks((prevTasks) => {
      if (prevTasks.includes(task)) {
        return prevTasks.filter((t) => t !== task);
      } else {
        return [...prevTasks, task];
      }
    });
  };

  return (
    <div className={styles.container}>
      <ProgressHeader step={step} totalSteps={5} onNavigate={handleNavigation} />

      <main className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>Skills and Task Preferences</h1>
          <p className={styles.subtitle}>That will help us better set up your account for you.</p>

          <TaskSelector />

          <div className={styles.specificTasksContainer}>
            <label className={styles.specificTasksLabel}>Select the specific tasks you can help</label>
            <div>Household Services</div>
            {specificTasks.map((task) => (
              <div key={task} className={styles.taskItem}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(task)}
                    onChange={() => handleTaskChange(task)}
                  />
                  {task}
                </label>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup2;
