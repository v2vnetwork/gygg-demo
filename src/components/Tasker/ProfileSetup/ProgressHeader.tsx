import { ArrowLeft } from 'lucide-react';
import styles from './ProgressHeader.module.css';
import Image from 'next/image'; // Assuming you're using Next.js for handling images

interface ProgressHeaderProps {
  step: number;
  totalSteps?: number;
  onNavigate: (direction: 'back' | 'next') => void;
}

const ProgressHeader = ({ step, totalSteps = 5, onNavigate }: ProgressHeaderProps) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Logo on the left */}
        <div className={styles.logo}>
          <Image src="/gygg_logo.svg" alt="Logo" width={150} height={150} />
        </div>

        {/* Content (title, progress, and navigation) on the right */}
        <div className={styles.content}>
          <div className={styles.headerContent}>
            <span className={styles.title}>Profile set up</span>
            <span className={styles.progress}>{step}/{totalSteps}</span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progressPercentage}%` }}></div>
          </div>

          <div className={styles.navigation}>
            <div className={styles.backButton} onClick={() => onNavigate('back')}>
              <ArrowLeft size={24} />
              Back
            </div>
            <button className={styles.nextButton} onClick={() => onNavigate('next')}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressHeader;
