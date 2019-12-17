import React from "react";
import styles from "./styles.module.css";
import { profileFactory } from "../profile";
import { notificationFactory } from "../notification";

export const appFactory = () => {
  const notification = notificationFactory();

  (window as any).actions = notification.actions;

  const profile = profileFactory({
    title: "Web developer",
    name: "Marcus Rådell",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1182702044395778049/KT2I-JrX_400x400.jpg",
    notify: notification.actions.notify.act
  });

  const view: React.FC = () => (
    <>
      <notification.View />
      <div className={styles.app}>
        <profile.View />
      </div>
    </>
  );

  return {
    view
  };
};
