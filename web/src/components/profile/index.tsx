import React, { useState } from "react";
import styles from "./profile.module.css";

export type ProfileFactoryProps = {
  name: string;
  title: string;
  imageUrl: string;
};

const openBody = styles.body;
const closedBody = [styles.body, styles.body_collapsed].join(" ");

export const ProfileFactory = (p: ProfileFactoryProps) => {
  const View: React.FC = () => {
    const [open, toggleOpen] = useState(true);

    return (
      <div className={styles.card}>
        <div className={styles.top}>
          <h1 className={styles.heading}>{p.title}</h1>
        </div>

        <div className={open ? openBody : closedBody}>
          <img className={styles.image} src={p.imageUrl} alt="profile image" />
          <div className={styles.data}>
            <div className={styles.data_row}>+10 years</div>
            <div className={styles.data_row}>JavaScript fullstack</div>
            <div className={styles.data_row}>Programming mentor</div>
            <div className={styles.data_row}>RxJS, TypeScript</div>
          </div>
        </div>
        <div
          className={styles.bottom}
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          <h2 className={styles.heading}>{p.name}</h2>
        </div>
      </div>
    );
  };

  return {
    View
  };
};
