import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './profilesetup5.module.css';
import ProgressHeader from '@/components/Tasker/ProfileSetup/ProgressHeader';
import { InputField } from '@/components/Tasker/ProfileSetup/InputField';
import { FaUpload } from 'react-icons/fa';
import Image from 'next/image';

const ProfileSetup5 = () => {
  const [step, setStep] = useState(5);
  const router = useRouter();
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for file input

  const handleNavigation = (direction: 'back' | 'next') => {
    if (direction === 'back') {
      setStep((prev) => prev - 1);
      router.push(`/tasker/profilesetup${step - 1}`);
    } else if (direction === 'next') {
      router.push('/socialpage');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Trigger file input manually
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <div className={styles.container}>
      <ProgressHeader step={step} totalSteps={5} onNavigate={handleNavigation} />

      <main className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>Profile Picture and Bio</h1>
          <p className={styles.subtitle}>
            That will help us better set up your account for you.
          </p>

          <InputField
            label="Tell us a little more about yourself? What do you enjoy most about helping others? (This will show on your profile bio on your page)"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <div className={styles.imageSection}>
            <div
              className={styles.imagePreview}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile preview"
                  className={styles.previewImage}
                />
              ) : (
                <div className={styles.placeholder}>No image selected</div>
              )}
            </div>

            <div
              className={styles.imageUpload}
              onClick={handleUploadClick} // make the whole box clickable
            >
              <FaUpload className={styles.uploadIcon} />
              <p className={styles.uploadText}>Click to upload or drag an image here</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className={styles.fileInput}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup5;
