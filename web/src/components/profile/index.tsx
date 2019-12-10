import React from "react";

export type ProfileFactoryProps = {
  name: string;
  title: string;
  imageUrl: string;
};

export const ProfileFactory = (p: ProfileFactoryProps) => {
  const view: React.FC = () => (
    <div className="max-w-sm  rounded-lg overflow-hidden shadow-xl bg-green-800 px-5 justify-center flex">
      <div>
        <h1 className="text-gray-100 text-xl">{p.title}</h1>
        <img
          className="h-24 w-24 rounded-full"
          src={p.imageUrl}
          alt="profile image"
        />
        <h2 className="text-gray-100 text-lg">{p.name}</h2>
      </div>
    </div>
  );

  return {
    view
  };
};
