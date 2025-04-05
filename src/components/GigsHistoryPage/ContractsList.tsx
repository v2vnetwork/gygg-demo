"use client";

import React from "react";
import styles from "./ContractsList.module.css";
import { ContractCard } from "./ContractCard";
import Image from 'next/image';

interface ContractCardProps {
  id: string;
  title: string;
  hiredBy: string;
  rate: string;
  earned: string;
  status: "Active" | "Ended"; // Strictly defined status
  startDate: string;
}

export const ContractsList: React.FC = () => {
    const contracts: ContractCardProps[] = [
      {
        id: "234567",
        title: "Dog sitting for the weekend in Thornhill",
        hiredBy: "Justin.S",
        rate: "20/hr",
        earned: "$100",
        status: "Active",
        startDate: "March 20, 2024",
      },
      {
        id: "345678",
        title: "Graphic design for startup logo",
        hiredBy: "Emily.R",
        rate: "35/hr",
        earned: "$280",
        status: "Ended",
        startDate: "January 15, 2024",
      },
      {
        id: "456789",
        title: "House cleaning service in Downtown",
        hiredBy: "Daniel.K",
        rate: "25/hr",
        earned: "$200",
        status: "Active",
        startDate: "March 10, 2024",
      },
      {
        id: "567890",
        title: "Freelance writing for a tech blog",
        hiredBy: "Sarah.L",
        rate: "50/article",
        earned: "$150",
        status: "Ended",
        startDate: "February 28, 2024",
      },
      {
        id: "678901",
        title: "Virtual assistant for data entry",
        hiredBy: "Michael.T",
        rate: "18/hr",
        earned: "$144",
        status: "Active",
        startDate: "March 5, 2024",
      },
      {
        id: "789012",
        title: "Personal trainer - 1-week session",
        hiredBy: "Chris.M",
        rate: "40/hr",
        earned: "$400",
        status: "Active",
        startDate: "March 8, 2024",
      },
      {
        id: "890123",
        title: "Web development for portfolio site",
        hiredBy: "Sophia.N",
        rate: "30/hr",
        earned: "$300",
        status: "Ended",
        startDate: "February 10, 2024",
      },
      {
        id: "901234",
        title: "Photography for birthday event",
        hiredBy: "David.W",
        rate: "75/hr",
        earned: "$450",
        status: "Active",
        startDate: "March 18, 2024",
      },
    ];
  

  return (
    <section className={styles.contractsSection}>
      <div className={styles.searchPlaceholder} />
      <div className={styles.contractsHeader}>
        <nav className={styles.contractsNav}>
          <h1 className={styles.activeTab}>All Contracts</h1>
          <h2 className={styles.tab}>Billing and payment</h2>
        </nav>
        <div className={styles.tabIndicator}>
          <div className={styles.activeIndicator} />
          <div className={styles.inactiveIndicator} />
        </div>
      </div>
      <div className={styles.contractsContainer}>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03d835171130baae7e0c4ae2bea3dbf40c6fce9e"
              className={styles.icon}
              alt="Contracts Icon"
            />
          </div>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42e666922fd424586cc5a3ff6fc0dfdc0843948"
            className={styles.secondaryIcon}
            alt="Secondary Icon"
          />
        </div>
        {contracts.map((contract) => (
          <ContractCard key={contract.id} {...contract} />
        ))}
      </div>
    </section>
  );
};
