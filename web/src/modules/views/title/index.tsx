import React from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => (
  <div className={styles.section}>{title}</div>
);
