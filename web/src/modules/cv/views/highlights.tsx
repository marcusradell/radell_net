import React from "react";
import s from "./styles.module.css";

type Props = {
  highlights: string[];
};

export const Highlights: React.FC<Props> = ({ highlights }) => (
  <div className={s.highlights}>
    {highlights.map(h => (
      <div className={s.highlight}>{h}</div>
    ))}
  </div>
);
