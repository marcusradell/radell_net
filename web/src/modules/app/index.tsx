import React from "react";
import styles from "./styles.module.css";
import { profileFactory } from "../profile";
import { notificationFactory } from "../notification";
import { cvFactory } from "../cv";

export const appFactory = () => {
  const notification = notificationFactory();

  // Open the console to call the actions manually.
  (window as any).actions = notification.actions;

  const profile = profileFactory({
    title: "Web developer",
    name: "Marcus Rådell",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1182702044395778049/KT2I-JrX_400x400.jpg",
    notify: notification.actions.notify.act
  });

  const cv = cvFactory();

  const view: React.FC = () => (
    <>
      <notification.View />
      <div className={styles.app}>
        <profile.View />
        <cv.View />
      </div>
    </>
  );

  return {
    view
  };
};
