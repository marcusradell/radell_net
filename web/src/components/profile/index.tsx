import React, { FC } from "react";

export type ProfileFactoryProps = {
  name: string;
  title: string;
  imageUrl: string;
};

export const ProfileFactory = (p: ProfileFactoryProps) => {
  const view: FC<unknown> = () => (
    <>
      <h1>{p.title}</h1>
      <img src={p.imageUrl} alt="profile image" />
      <h2>{p.name}</h2>
    </>
  );

  return {
    view
  };
};
