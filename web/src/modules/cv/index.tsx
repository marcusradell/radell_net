import React from "react";
import { Title } from "../views/title";
import { Role } from "./views/role";
import { data } from "./data";
import { Card } from "../views/card";
import { Company } from "./views/company";
import { ShortDescription } from "./views/short-description";
import { Tags } from "./views/tags";
import { Highlights } from "./views/highlights";

export type Cv = {
  View: React.FC;
};

export type CvFactory = () => Cv;

export const cvFactory: CvFactory = () => {
  const View = () => {
    return (
      <>
        <Title title="Curriculum Vitae" />
        {data.map(row => (
          <Card>
            <Role role={row.role} />
            <ShortDescription shortDescription={row.short_description} />
            <Tags tags={row.tags} />
            <Highlights highlights={row.highlights} />
            <Company company={row.company} />
          </Card>
        ))}
      </>
    );
  };

  return {
    View
  };
};
