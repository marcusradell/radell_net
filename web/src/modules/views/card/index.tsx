import React from "react";
import s from "./styles.module.css";

export const Card: React.FC = ({ children }) => (
  <div className={s.card}>{children}</div>
);
