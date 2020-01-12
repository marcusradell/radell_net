import React, { useState } from "react";
import s from "../styles.module.css";

type Props = {
  highlights: string[];
};

export const Highlights: React.FC<Props> = ({ highlights }) => {
  const [isOpen, setOpen] = useState(false);

  return isOpen ? (
    <>
      <button className={s.highlights_view} onClick={() => setOpen(false)}>
        ❌ Close highlights
      </button>
      <div className={s.highlights}>
        {highlights.map((h, i) => (
          <div className={s.highlight} key={i}>
            {h}
          </div>
        ))}
      </div>
      <button className={s.highlights_view} onClick={() => setOpen(false)}>
        ❌ Close highlights
      </button>
    </>
  ) : highlights.length > 0 ? (
    <button className={s.highlights_view} onClick={() => setOpen(true)}>
      ⭐ View {highlights.length} highlights
    </button>
  ) : null;
};
