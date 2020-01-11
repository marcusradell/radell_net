import React from "react";
import s from "./styles.module.css";

type Props = {
  shortDescription: string;
};

export const ShortDescription: React.FC<Props> = ({ shortDescription }) => (
  <div className={s.short_description}>{shortDescription}</div>
);
