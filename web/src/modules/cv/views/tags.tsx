import React from "react";
import s from "./styles.module.css";

type Props = {
  tags: string[];
};

export const Tags: React.FC<Props> = ({ tags }) => (
  <div className={s.tags}>
    {tags.map(tag => (
      <div className={s.tag}>{tag.replace(/_/g, " ")}</div>
    ))}
  </div>
);
