import React from "react";
import s from "../styles.module.css";

type Props = {
  to: [number, number];
  from: [number, number];
};

export const Dates: React.FC<Props> = ({ to, from }) => {
  let months = to[1] - from[1];
  const years = to[0] - from[0] - (months < 0 ? 1 : 0);
  if (months < 0) {
    months += 12;
  }
  const yearsWithMonthDecimal = (years + months / 12).toFixed(1);

  return (
    <div className={s.dates}>
      {yearsWithMonthDecimal}
      <span style={{ marginLeft: 2 }}>yr</span>
    </div>
  );
};
