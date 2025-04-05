import React from "react";
import styles from "./FileUpload.module.css";

const FileUpload: React.FC = () => {
  return (
    <div className={styles.uploadContainer}>
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1211_402)">
          <path
            d="M29.525 15.06C28.505 9.885 23.96 6 18.5 6C14.165 6 10.4 8.46 8.525 12.06C4.01 12.54 0.5 16.365 0.5 21C0.5 25.965 4.535 30 9.5 30H29C33.14 30 36.5 26.64 36.5 22.5C36.5 18.54 33.425 15.33 29.525 15.06ZM29 27H9.5C6.185 27 3.5 24.315 3.5 21C3.5 17.925 5.795 15.36 8.84 15.045L10.445 14.88L11.195 13.455C12.62 10.71 15.41 9 18.5 9C22.43 9 25.82 11.79 26.585 15.645L27.035 17.895L29.33 18.06C31.67 18.21 33.5 20.175 33.5 22.5C33.5 24.975 31.475 27 29 27ZM12.5 19.5H16.325V24H20.675V19.5H24.5L18.5 13.5L12.5 19.5Z"
            fill="#3D4D55"
          />
        </g>
        <defs>
          <clipPath id="clip0_1211_402">
            <rect
              width="36"
              height="36"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.uploadText}>
        <p className={styles.uploadInstruction}>
          Drag and Drop Series Thumbnail or{" "}
          <button className={styles.browseButton}>browse</button>
        </p>
        <p className={styles.uploadLimit}>Max 10 MB files are allowed</p>
      </div>
    </div>
  );
};

export default FileUpload;
