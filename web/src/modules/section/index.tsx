import React from "react";
import styles from "./styles.module.css";

export type Props = {
  title: string;
};

export type Module = {
  View: React.FC;
};

export type Factory = (p: Props) => Module;

export const sectionFactory: Factory = p => {
  const View = () => <div className={styles.section}>{p.title}</div>;

  return {
    View
  };
};
