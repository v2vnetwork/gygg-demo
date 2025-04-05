import React, { useState } from "react";
import { useRouter } from "next/router"; 
import styles from "./signupform.module.css";
import InputField from "../components/SignupForm/InputField";
import Image from 'next/image';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "testuser@example.com",
    phone: "+11234567890",
    password: "Password123!",
    location: "Toronto, Canada",
    dob: "1995-06-15", // ✅ Default dummy data for Date of Birth
  });

  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    router.push("/tasker/profilesetup1");
  };

  return (
    <main className={styles.container}>
      <Image src="/gygg_logo.svg" alt="GYGG Logo" className={styles.logo} />

      <section className={styles.formContainer}>
        <h1 className={styles.title}>Sign up</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField
            label="Work email*"
            name="email"
            type="email"
            placeholder="ex. email@domain.com"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Phone number*"
            name="phone"
            type="text"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            icon="phone"
            inputMode="numeric"
            maxLength={10} 
          />

          <InputField
            label="Password*"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            icon="password"
            maxLength={20}
          />

          <InputField
            label="Date of Birth*"
            name="dob"
            type="date"  // ✅ Using type="date" for date picker
            placeholder="Select your birthdate"
            value={formData.dob}
            onChange={handleChange}
          />

          <InputField
            label="Location*"
            name="location"
            type="text"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
          />

          <footer className={styles.footer}>
            <p className={styles.terms}>
              By registering, you agree to our{" "}
              <a href="#" className={styles.link}>Terms of Service</a> and{" "}
              <a href="#" className={styles.link}>Privacy Policy</a>.
            </p>

            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default SignUpForm;
