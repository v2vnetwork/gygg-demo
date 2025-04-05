import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import styles from "./Sidebar.module.css";
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Added to allow closing Sidebar when clicking outside
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState("home");
  const router = useRouter(); // Initialize the router

  // Function to handle navigation
  const handleNavigation = (route: string) => {
    setSelectedItem(route); // Update selected item state
    router.push(`/${route}`); // Navigate to the specified route
  };

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.collapsed}`}>
      <div
        className={`${styles.navItem} ${selectedItem === "home" ? styles.selected : ""}`}
        onClick={() => handleNavigation("socialpage")}
      >
        <Image
          className={selectedItem === "home" ? styles.selectedIcon : styles.defaultIcon}
          src="/home.svg"
          alt="Home"
        />
        {isOpen && <span className={styles.navText}>Home</span>}
      </div>

      <div
        className={`${styles.navItem} ${selectedItem === "messages" ? styles.selected : ""}`}
        onClick={() => handleNavigation("chatpage")}
      >
        <Image
          className={selectedItem === "messages" ? styles.selectedIcon : styles.defaultIcon}
          src="/messages.svg"
          alt="Messages"
        />
        {isOpen && <span className={styles.navText}>Messages</span>}
      </div>

      <div
        className={`${styles.navItem} ${selectedItem === "contracts" ? styles.selected : ""}`}
        onClick={() => handleNavigation("gigshistory")}
      >
        <Image
          className={selectedItem === "contracts" ? styles.selectedIcon : styles.defaultIcon}
          src="/clock.svg"
          alt="Task History"
        />
        {isOpen && <span className={styles.navText}>Task History</span>}
      </div>

      <div
        className={`${styles.navItem} ${selectedItem === "gigs" ? styles.selected : ""}`}
        onClick={() => handleNavigation("gigspage")}
      >
        <Image
          className={selectedItem === "gigs" ? styles.selectedIcon : styles.defaultIcon}
          src="/briefcase.svg"
          alt="Gigs"
        />
        {isOpen && <span className={styles.navText}>Gigs</span>}
      </div>
    </nav>
  );
};

export default Sidebar;
