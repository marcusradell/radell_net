import React from "react";
import styles from "./styles.module.css";
import { profileFactory } from "../profile";

export const appFactory = () => {
  const profile = profileFactory({
    title: "Web developer",
    name: "Marcus Rådell",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1182702044395778049/KT2I-JrX_400x400.jpg"
  });

  const view: React.FC = () => (
    <div className={styles.app}>
      <profile.View />
    </div>
  );

  return {
    view
  };
};
