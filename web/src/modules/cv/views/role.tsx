import React from "react";
import s from "../styles.module.css";

type Props = {
  role: string;
};

export const Role: React.FC<Props> = ({ role }) => (
  <div className={s.role}>{role}</div>
);
