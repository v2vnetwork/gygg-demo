"use client";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for programmatic navigation
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import Link from "next/link"; // Import Link component
import Image from 'next/image';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({
    adjustments: false,
    notification: false,
    profile: false,
  });

  const router = useRouter(); // Initialize the router

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Function to handle navigation
  const handleNavigation = (route: string) => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleSidebar} className={styles.menuButton}>
          <Image src="/menu.svg" alt="Menu" className={styles.menuIcon} />
        </button>

        <Link href="/" className={styles.logoLink}>
          <Image
            src="/gygg_logo.svg"
            alt="Gygg Logo"
            className={styles.headerLogo}
          />
        </Link>

        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <Image src="/search-outline.svg" alt="Search" />
            <input
              type="text"
              placeholder="Search Tasks"
              className={styles.searchInput}
            />
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>

        <div className={styles.headerControls}>
          {/* Adjustments Dropdown */}
          <div className={styles.iconWithDropdown}>
            <Image
              src="/adjustments.svg"
              alt="Adjustments"
              className={styles.adjustmentsIcon}
              onClick={() => toggleDropdown("adjustments")}
            />
            {isDropdownOpen.adjustments && (
              <div className={styles.dropdown}>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/adjustment-option-1")}
                >
                  <Image src="/adjustment-icon.svg" alt="Adjustment Option 1" />
                  <p>Adjustment Option 1</p>
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/adjustment-option-2")}
                >
                  <Image src="/adjustment-icon.svg" alt="Adjustment Option 2" />
                  <p>Adjustment Option 2</p>
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/adjustment-option-3")}
                >
                  <Image src="/adjustment-icon.svg" alt="Adjustment Option 3" />
                  <p>Adjustment Option 3</p>
                </div>
              </div>
            )}
          </div>

          {/* Notification Dropdown */}
          <div className={styles.iconWithDropdown}>
            <Image
              src="/notification.svg"
              alt="Notification"
              className={styles.notificationIcon}
              onClick={() => toggleDropdown("notification")}
            />
            {isDropdownOpen.notification && (
              <div className={styles.dropdown}>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/notification-option-1")}
                >
                  <Image src="/notification-icon.svg" alt="Notification Option 1" />
                  <p>Notification Option 1</p>
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/notification-option-2")}
                >
                  <Image src="/notification-icon.svg" alt="Notification Option 2" />
                  <p>Notification Option 2</p>
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/notification-option-3")}
                >
                  <Image src="/notification-icon.svg" alt="Notification Option 3" />
                  <p>Notification Option 3</p>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className={styles.iconWithDropdown}>
            <Image
              src="/profile.svg"
              alt="Profile"
              className={styles.profileIcon}
              onClick={() => toggleDropdown("profile")}
            />
            {isDropdownOpen.profile && (
              <div className={styles.dropdown}>
                {/* Use Link for navigation if preferred */}
                <Link href="/profilepage">
                  <div className={styles.dropdownItem}>
                    <Image src="/user.svg" alt="Profile Icon" className={styles.icon} />
                    <p>My Profile</p>
                  </div>
                </Link>

                {/* Use handleNavigation for programmatic navigation */}
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/settings")}
                >
                  <Image src="/setting.svg" alt="Settings Icon" className={styles.icon} />
                  <p>Settings</p>
                </div>

                {/* Logout option */}
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleNavigation("/logout")}
                >
                  <Image src="/logout.svg" alt="Logout Icon" className={styles.icon} />
                  <p>Log out</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar receives state and toggle function */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
