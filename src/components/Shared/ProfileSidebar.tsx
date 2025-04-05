"use client";

import React from "react";
import styles from "./ProfileSidebar.module.css";
import Button from "./Button";
import Image from 'next/image';

interface ProfileSidebarProps {
  page: "gigspage" | "socialpage";
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ page }) => {
  const isGigPage = page === "gigspage";
  const headingText = isGigPage ? "" : "Hire someone for a gig";

  return (
    <aside className={styles.profileSidebar}>
      <h2 className={styles.profileTitleText}>
        {headingText}
        {!isGigPage && (
          <div className={styles.arrowIcon}>
            <Image src="/arrow-right.svg" alt="Arrow" />
          </div>
        )}
      </h2>

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <Image
            src="/assets/image-109.png"
            alt="Profile"
            className={styles.profileImage}
          />
          <div>
            <h3 className={styles.profileName}>Michelle Baskin</h3>
            <a href="#" className={styles.viewProfileLink}>
              View Profile
            </a>
          </div>
        </div>

        <section className={styles.gigsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Image src="/lamp-on.svg" alt="Lamp"/>
            </div>
            <h4 className={styles.sectionTitle}>Gigs I can help with</h4>
          </div>
          <div className={styles.gigTags}>
            <Button className={styles.gigTag}>Pet Sitting</Button>
            <Button className={styles.gigTag}>Gardening</Button>
            <Button className={styles.gigTag}>Shelf Mounting</Button>
            <Button className={styles.gigTag}>Grocery Shopping</Button>
          </div>
        </section>

        <section className={styles.peopleSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Image src="/profile-2user.svg" alt="Profile" />
            </div>
            <h4 className={styles.sectionTitleUnderlined}>
              3 People need your help
            </h4>
          </div>
          <div className={styles.peopleList}>
            <div className={styles.personItem}>
              <Image
                src="/assets/image-123.png"
                alt="Person"
                className={styles.personImage}
              />
              <div>
                <p className={styles.personDescription}>
                  Ariana. A from Thornhill needs a dog sitter
                </p>
                <a href="#" className={styles.viewGigLink}>
                  View gig detail
                </a>
              </div>
            </div>
            <div className={styles.personItem}>
              <Image
                src="/assets/image-275.png"
                alt="Person"
                className={styles.personImage}
              />
              <div>
                <p className={styles.personDescription}>
                  Lia.T is from Thornhill needs a grocery Shopper
                </p>
                <a href="#" className={styles.viewGigLink}>
                  View gig detail
                </a>
              </div>
            </div>
            <div className={styles.personItem}>
              <Image
                src="/assets/image-568.png"
                alt="Person"
                className={styles.personImage}
              />
              <div>
                <p className={styles.personDescription}>
                  Wilson. H from Richmondhill needs a furniture assembler
                </p>
                <a href="#" className={styles.viewGigLink}>
                  View gig detail
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
