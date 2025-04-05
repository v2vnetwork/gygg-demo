"use client";

import React from "react";
import styles from "./ProfileCard.module.css";

export const ProfileCard: React.FC = () => {
  return (
    <aside className={styles.profileSection}>
      <article className={styles.profileCard}>
        <header className={styles.profileHeader}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32412fab321d3ccef65e0574993b57cd3f3696c?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
            className={styles.profileImage}
            alt="Michelle Baskin"
          />
          <div className={styles.profileInfo}>
            <h2 className={styles.profileName}>Michelle Baskin</h2>
            <a href="#" className={styles.profileLink}>
              View Profile
            </a>
          </div>
        </header>

        <section className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Gyggs I can help with</h3>
          <div className={styles.skillsRow}>
            <button className={styles.skillButton}>Pet Sitting</button>
            <button className={styles.skillButton}>Gardening</button>
          </div>
          <div className={styles.skillsRow}>
            <button className={styles.skillButton}>Shelf Mounting</button>
            <button className={styles.skillButton}>Grocery Shopping</button>
          </div>
        </section>

        <section className={styles.helpSection}>
          <h3 className={styles.sectionTitle}>3 People need your help</h3>
          <div className={styles.helpRequests}>
            <div className={styles.requestItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/328be27999a54dcde50f48c2e153ab7e73892165?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
                className={styles.requestorImage}
                alt="Ariana A"
              />
              <div className={styles.requestInfo}>
                <p>Ariana. A from Thornhill needs a dog sitter</p>
                <a href="#" className={styles.viewTaskLink}>
                  View task detail
                </a>
              </div>
            </div>
            <div className={styles.requestItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0ac31e82ab2d50414a0284f8f605ccc411b45?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
                className={styles.requestorImage}
                alt="Lia T"
              />
              <div className={styles.requestInfo}>
                <p>Lia.T is from Thornhill needs a grocery Shopper</p>
                <a href="#" className={styles.viewTaskLink}>
                  View task detail
                </a>
              </div>
            </div>
            <div className={styles.requestItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4061e026f8d82babd70d7083ae657fe603947632?placeholderIfAbsent=true&apiKey=e2da9b14c39a4894a93933cb85ce9b80"
                className={styles.requestorImage}
                alt="Wilson H"
              />
              <div className={styles.requestInfo}>
                <p>Wilson. H from Richmondhill needs a furniture assembler</p>
                <a href="#" className={styles.viewTaskLink}>
                  View task detail
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </aside>
  );
};
