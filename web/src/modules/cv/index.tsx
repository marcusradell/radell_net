import React from "react";
import { Title } from "../views/title";
import { Role } from "./views/role";
import { data } from "./data";
import { Card } from "../views/card";
import { Company } from "./views/company";
import { ShortDescription } from "./views/short-description";
import { Tags } from "./views/tags";
import { Highlights } from "./views/highlights";
import s from "./styles.module.css";

export type Cv = {
  View: React.FC;
};

export type CvFactory = () => Cv;

export const cvFactory: CvFactory = () => {
  const View = () => {
    return (
      <div className={s.cv}>
        <Title title="Curriculum Vitae" />
        {data.map((row, i) => (
          <div key={i}>
            <Card>
              <Role role={row.role} />
              <ShortDescription shortDescription={row.short_description} />
              <Tags tags={row.tags} />
              <Company company={row.company} />
            </Card>
            <Highlights highlights={row.highlights} />
          </div>
        ))}
      </div>
    );
  };

  return {
    View
  };
};
