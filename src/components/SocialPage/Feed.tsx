"use client";
import React, { useState } from "react";
import styles from "./Feed.module.css";
import Post from "./Post";
import Button from "../Shared/Button";
import Image from 'next/image';

const Feed: React.FC = () => {
  const [postText, setPostText] = useState(""); 
  const [posts, setPosts] = useState([
    {
      profileImage: "/assets/image-133.png",
      username: "Sam Guy",
      handle: "@samguy",
      content: "Off to Metro!",
      likes: 110,
      comments: 32,
      isSimple: true,
    },
    {
      profileImage: "/assets/image-133.png",
      username: "Sam Guy",
      handle: "@samguy",
      content: "Does anyone else need to lay out all grocery items before restocking? haha",
      image: "/assets/image-134.png",
      likes: 110,
      comments: 32,
      isSimple: false,
    },
  ]);

  const handlePostSubmit = () => {
    if (!postText.trim()) return;

    const newPost = {
      profileImage: "/assets/image-109.png", // User's default profile image
      username: "You", // Placeholder username
      handle: "@you",
      content: postText,
      likes: 0,
      comments: 0,
      isSimple: true,
    };

    setPosts([newPost, ...posts]); // Add new post at the top
    setPostText(""); // Clear input after posting
  };

  return (
    <main className={styles.feedContainer}>
      <section className={styles.feedHeader}>
        <div className={styles.feedTitle}></div>
        <div className={styles.filterButtons}>
          <Button className={styles.activeFilterButton} isActive={true}>Recents</Button>
          <Button className={styles.filterButton} isActive={false}>Near me</Button>
          <Button className={styles.filterButton} isActive={false}>Trending</Button>
        </div>
      </section>

      <section className={styles.createPostCard}>
        <div className={styles.createPostHeader}>
          <Image src="/assets/image-109.png" alt="Profile" className={styles.profileImage} />
          <input
            type="text"
            className={styles.createPostInput}
            placeholder="What's happening?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className={styles.createPostActions}>
          <div className={styles.postIcons}>
            <div className={styles.postIcon}><Image src="/image.svg" alt="Image" /></div>
            <div className={styles.postIcon}><Image src="/gif.svg" alt="Gif" /></div>
            <div className={styles.postIcon}><Image src="/emoji.svg" alt="Emoji" /></div>
          </div>
          <Button className={styles.postButton} onClick={handlePostSubmit}>Post</Button>
        </div>
      </section>

      <section className={styles.postsContainer}>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </section>
    </main>
  );
};

export default Feed;
