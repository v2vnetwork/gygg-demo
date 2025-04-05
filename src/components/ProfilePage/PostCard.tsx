import React from "react";
import styles from "./PostCard.module.css";

interface PostCardProps {
  profileImage: string;
  name: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({
  profileImage,
  name,
  date,
  content,
  likes,
  comments,
}) => {
  return (
    <article className={styles.postCard}>
      <div className={styles.postHeader}>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className={styles.postProfileImg}
        />
        <div className={styles.postAuthorInfo}>
          <h3 className={styles.postAuthorName}>{name}</h3>
          <time className={styles.postDate}>{date}</time>
        </div>
        <button className={styles.moreButton}>
        <img 
          src="/more.svg" 
          alt="More" 
          className={styles.moreIcon}
        />
        </button>
      </div>
      <p className={styles.postContent}>{content}</p>
      <div className={styles.postActions}>
        <div className={styles.actionItem}>
        <img 
          src="/heart.svg" 
          alt="Heart" 
          className={styles.heartIcon}
        />
          <span>{likes}</span>
        </div>
        <div className={styles.actionItem}>
        <img 
          src="/comment.svg" 
          alt="Comment" 
          className={styles.CommentIcon}
        />
          <span>{comments}</span>
        </div>
        <button className={styles.bookmarkButton}>
        <img 
          src="/bookmark.svg" 
          alt="Bookmark" 
          className={styles.bookmarkIcon}
        />
        </button>
      </div>
    </article>
  );
};

export default PostCard;
