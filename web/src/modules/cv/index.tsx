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
import { Dates } from "./views/dates";

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
              <div className={s.labels}>
                <Dates {...row.dates} />
                <Company company={row.company} />
              </div>
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
