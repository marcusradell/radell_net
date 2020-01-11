import React from "react";
import s from "../styles.module.css";

type Props = {
  company: string;
};

export const Company: React.FC<Props> = ({ company }) => (
  <div className={s.company_wrapper}>
    <div className={s.company}>{company}</div>
  </div>
);
