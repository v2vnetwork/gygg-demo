import React from "react";
import styles from "./Post.module.css";

interface PostProps {
  profileImage: string;
  username: string;
  handle: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isSimple?: boolean;
}

const Post: React.FC<PostProps> = ({
  profileImage,
  username,
  handle,
  content,
  image,
  likes,
  comments,
  isSimple = true,
}) => {
  return (
    <article className={isSimple ? styles.postCard : styles.postCardWithImage}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <img
            src={profileImage}
            alt={username}
            className={styles.profileImage}
          />
          <div>
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.userHandle}>{handle}</p>
          </div>
        </div>
        <div className={styles.moreIcon}>
          <img src="/more.svg" />
        </div>
      </div>

      {isSimple ? (
        <p className={styles.postContent}>{content}</p>
      ) : (
        <>
          {image && <img src={image} alt="" className={styles.postImage} />}
          <div className={styles.commentSection}>
            <div className={styles.postActions}>
              <div className={styles.actionButtons}>
                <div className={styles.actionButton}>
                  <img src="/heart.svg" />
                  <span className={styles.actionCount}>{likes}</span>
                </div>
                <div className={styles.actionButton}>
                  <img src="/comment.svg" />
                  <span className={styles.actionCount}>{comments}</span>
                </div>
              </div>
              <div className={styles.bookmarkIcon}>
                <img src="/bookmark.svg" />
              </div>
            </div>
            <div className={styles.commentContent}>
              <div className={styles.commentUser}>
                <span className={styles.commentUsername}>{username}</span>
                <span className={styles.commentHandle}>{handle}</span>
              </div>
              <p className={styles.commentText}>{content}</p>
              <div className={styles.writeComment}>Write a comment</div>
            </div>
          </div>
        </>
      )}

      {isSimple && (
        <div className={styles.postActions}>
          <div className={styles.actionButtons}>
            <div className={styles.actionButton}>
              <img src="/heart.svg" />
              <span className={styles.actionCount}>{likes}</span>
            </div>
            <div className={styles.actionButton}>
              <img src="/comment.svg" />
              <span className={styles.actionCount}>{comments}</span>
            </div>
          </div>
          <div className={styles.bookmarkIcon}>
            <img src="/bookmark.svg" />
          </div>
        </div>
      )}
    </article>
  );
};

export default Post;
