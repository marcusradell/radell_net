import React from "react";
import s from "../styles.module.css";

type Props = {
  tags: Array<[string, number]>;
};

export const Tags: React.FC<Props> = ({ tags }) => (
  <ul className={s.tags}>
    {tags.map(tag => (
      <li className={`${s.tag} ${s["tag-" + tag[1]]}`} key={tag[0]}>
        {tag[0].replace(/_/g, " ")}
      </li>
    ))}
  </ul>
);
