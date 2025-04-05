"use client";

import React, { useState } from "react";
import styles from "./PersonalInfoForm.module.css";

const PersonalInfoForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");

  // State for Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Michelle",
    lastName: "Baskins",
    email: "MichelleB@gmail.com",
    currentPassword: "",
    newPassword: "",
    address: "123 Main St, Toronto, Canada",
    city: "Toronto",
    postalCode: "M5V 1E3",
  });

  // State for Withdraw Information
  const [withdrawInfo, setWithdrawInfo] = useState({
    firstName: "Michelle",
    lastName: "Baskins",
    email: "MichelleB@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (activeTab === "personal") {
      setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    } else {
      setWithdrawInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "personal") {
      console.log("Personal Info submitted:", personalInfo);
      alert("Personal information saved!");
    } else {
      console.log("Withdraw Info submitted:", withdrawInfo);
      alert("Withdraw details saved!");
    }
  };

  return (
    <div className={styles.container}>
      {/* Tabs for switching */}
      <div className={styles.tabs}>
        <div
          className={activeTab === "personal" ? styles.activeTab : styles.inactiveTab}
          onClick={() => setActiveTab("personal")}
        >
          Personal Information
        </div>
        <div
          className={activeTab === "withdraw" ? styles.activeTab : styles.inactiveTab}
          onClick={() => setActiveTab("withdraw")}
        >
          Withdraw Information
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {activeTab === "personal" ? (
          <>
            <h2>Personal Information</h2>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={personalInfo.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={personalInfo.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={personalInfo.address}
                onChange={handleChange}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={personalInfo.city}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={personalInfo.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>PayPal Details</h2>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={withdrawInfo.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={withdrawInfo.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={withdrawInfo.email}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button type="submit" className={styles.saveButton}>Save</button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
