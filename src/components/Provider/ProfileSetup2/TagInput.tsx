"use client";
import React from "react";
import styles from "./TagInput.module.css";
import { CloseIcon, DropdownArrowIcon } from "./Icons";

interface Tag {
  id: string;
  label: string;
}

interface TagInputProps {
  label: string;
  tags: Tag[];
  onRemoveTag: (id: string) => void;
  onOpenDropdown: () => void;
}

export const TagInput: React.FC<TagInputProps> = ({
  label,
  tags,
  onRemoveTag,
  onOpenDropdown,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        {tags.map((tag) => (
          <div key={tag.id} className={styles.tag}>
            <span className={styles.tagLabel}>{tag.label}</span>
            <button
              className={styles.removeButton}
              onClick={() => onRemoveTag(tag.id)}
              aria-label={`Remove ${tag.label}`}
            >
              <CloseIcon />
            </button>
          </div>
        ))}
        <button
          className={styles.dropdownButton}
          onClick={onOpenDropdown}
          aria-label="Open dropdown"
        >
          <DropdownArrowIcon />
        </button>
      </div>
    </div>
  );
};
