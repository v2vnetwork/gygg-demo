import React from "react";
import styles from "./PostsSection.module.css";
import PostCard from "./PostCard";

const PostsSection: React.FC = () => {
  return (
    <section className={styles.postsCard}>
      <div className={styles.postsHeader}>
        <h2>Recent posts</h2>
        <button className={styles.seeAllButton}>See all</button>
      </div>
      <div className={styles.postsGrid}>
        <PostCard
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/331608533d0c16fa1d20f234acbe976a6434dd17"
          name="Michelle Baskin"
          date="March 23,2025"
          content="our dog deserves the best while you're away! I'll take care of your pup like my own with walks, cuddles, and playtime. 🐕💖 #DogSitter #HappyPups #PetSitting"
          likes={110}
          comments={32}
        />
        <PostCard
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/331608533d0c16fa1d20f234acbe976a6434dd17"
          name="Michelle Baskin"
          date="March 23,2025"
          content="🐾 Looking for a loving sitter for your pup? I offer cozy, fun, and safe dog sitting services! DM for more info! 🐶 #DogSitting #FurryFriends #PetCare"
          likes={110}
          comments={32}
        />
      </div>
    </section>
  );
};

export default PostsSection;
