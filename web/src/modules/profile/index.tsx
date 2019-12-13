import React from "react";
import styles from "./styles.module.css";
import { sectionFactory } from "../section";
import { ReactComponent as JsLogo } from "./js-logo.svg";

export type Props = {
  name: string;
  title: string;
  imageUrl: string;
};

export type Profile = {
  View: React.FC;
};

export type ProfileFactory = (p: Props) => Profile;

export const profileFactory: ProfileFactory = p => {
  const section = sectionFactory({ title: p.title });

  const View = () => {
    return (
      <>
        <section.View />

        <div className={styles.card}>
          <div className={styles.body}>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                src={p.imageUrl}
                alt="profile image"
              />
              <div className={styles.years}>-08</div>
              <JsLogo className={styles.language} />
            </div>
            <ul className={styles.data}>
              <li>Mentor</li>
              <li>Modular code</li>
              <li>RxJs</li>
              <li>TypeScript</li>
              <li>Microservices</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return {
    View
  };
};
