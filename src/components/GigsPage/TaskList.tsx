import React from "react";
import styles from "./TaskList.module.css";
import { TaskCard } from "./TaskCard";

const tasks = [
  { 
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e686ed28611191afa737366e4435a6dcccf28cd",
    author: "Robert.T",
    title: "Looking for a dog sitter in Thornhill area",
    rate: "$16-22/hr",
    location: "Thornhill",
    postedTime: "Posted 4 hours ago",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e64b4003e240951935fe661bbc034c223290fc3f",
    author: "Louis.S",
    title: "Assemble and install furniture with precision",
    rate: "$19-20/hr",
    location: "Thornhill",
    postedTime: "Posted 3 hours ago",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d49b9b491990b4ab342e142f85e4c8be9d07f9f",
    author: "Sarah.S",
    title: "Care for dogs, including feeding and walking",
    rate: "$22-24/hr",
    location: "Thornhill",
    postedTime: "Posted 6 hours ago",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43df7813b3ec2276fd46b2a9ae8400282cec53ae",
    author: "Leila.R",
    title: "Shop for groceries and deliver them on time",
    rate: "$15-18/hr",
    location: "Thornhill",
    postedTime: "Posted 7 hours ago",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a5bfaa69fb2b9e953351e1577c051787f672079b",
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
