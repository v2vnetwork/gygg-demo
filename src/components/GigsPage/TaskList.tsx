import React from "react";
import styles from "./TaskList.module.css";
import { TaskCard } from "./TaskCard";

const tasks = [
  { 
    image:
      "/assets/man-1.jpg",
    author: "Robert.T",
    title: "Looking for a dog sitter in Thornhill area",
    rate: "$16-22/hr",
    location: "Thornhill",
    postedTime: "Posted 4 hours ago",
  },
  {
    image:
      "/assets/woman-1.jpg",
    author: "Louis.S",
    title: "Assemble and install furniture with precision",
    rate: "$19-20/hr",
    location: "Thornhill",
    postedTime: "Posted 3 hours ago",
  },
  {
    image:
      "/assets/woman-2.jpg",
    author: "Sarah.S",
    title: "Care for dogs, including feeding and walking",
    rate: "$22-24/hr",
    location: "Thornhill",
    postedTime: "Posted 6 hours ago",
  },
  {
    image:
      "/assets/image-275.png",
    author: "Leila.R",
    title: "Shop for groceries and deliver them on time",
    rate: "$15-18/hr",
    location: "Thornhill",
    postedTime: "Posted 7 hours ago",
  },
  {
    image:
      "/assets/woman-3.jpg",
    author: "Bethany.S",
    title: "Maintain and enhance outdoor plants and gardens",
    rate: "$16-22/hr",
    location: "Thornhill",
    postedTime: "Posted 9 hours ago",
  },
];

export const TaskList: React.FC = () => {
  return (
    <section className={styles.taskList}>
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </section>
  );
};
