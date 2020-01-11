import React from "react";
import { Title } from "../views/title";
import { Role } from "./views/role";
import { data } from "./data";
import { Card } from "../views/card";
import { Company } from "./views/company";
import { ShortDescription } from "./views/short-description";
import { Tags } from "./views/tags";

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
            <Tags tags={row.tags} />
            <ShortDescription shortDescription={row.short_description} />
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
