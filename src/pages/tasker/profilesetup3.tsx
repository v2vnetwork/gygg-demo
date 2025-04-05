import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './profilesetup3.module.css';
import ProgressHeader from '@/components/Tasker/ProfileSetup/ProgressHeader';
import { InputField } from '@/components/Tasker/ProfileSetup/InputField';

const hobbiesOptions = [
  'Reading',
  'Gardening',
  'Traveling',
  'Photography',
  'Cooking',
  'Sports',
  'Music',
  'Art',
  'Gaming',
];

const ProfileSetup3 = () => {
  const [step, setStep] = useState(3);
  const router = useRouter();
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [selfDescription, setSelfDescription] = useState('');
  const [peopleYouEnjoy, setPeopleYouEnjoy] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

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

  const filteredOptions = hobbiesOptions.filter(
    (hobby) =>
      hobby.toLowerCase().includes(search.toLowerCase()) &&
      !selectedHobbies.includes(hobby)
  );

  const addHobby = (hobby: string) => {
    setSelectedHobbies([...selectedHobbies, hobby]);
    setSearch('');
    setShowDropdown(false);
  };

  const removeHobby = (hobby: string) => {
    setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
  };

  return (
    <div className={styles.container}>
      <ProgressHeader step={step} totalSteps={5} onNavigate={handleNavigation} />

      <main className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>Personality and Interests</h1>
          <p className={styles.subtitle}>That will help us better set up your account for you.</p>

          {/* Searchable Multi-select Dropdown */}
          <div className={styles.inputField}>
            <label className={styles.inputLabel}>What are your hobbies?</label>

            <div className={styles.dropdownWrapper}>
              <div className={styles.tagsInput}>
                {selectedHobbies.map((hobby) => (
                  <span key={hobby} className={styles.tag}>
                    {hobby}
                    <span className={styles.remove} onClick={() => removeHobby(hobby)}>×</span>
                  </span>
                ))}

                <input
                  className={styles.searchInput}
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Type your hobbies"
                />
              </div>

              {showDropdown && filteredOptions.length > 0 && (
                <ul className={styles.dropdownList}>
                  {filteredOptions.map((hobby) => (
                    <li key={hobby} onClick={() => addHobby(hobby)} className={styles.dropdownItem}>
                      {hobby}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <InputField
            label="How would you describe yourself?"
            type="text"
            value={selfDescription}
            onChange={(e) => setSelfDescription(e.target.value)}
          />

          <InputField
            label="What kind of people do you enjoy spending time with?"
            type="text"
            value={peopleYouEnjoy}
            onChange={(e) => setPeopleYouEnjoy(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup3;
