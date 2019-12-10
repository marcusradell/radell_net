import React from "react";
import logo from "./logo.svg";
import { ProfileFactory } from "./components/profile";

export const AppFactory = () => {
  const profile = ProfileFactory({
    title: "Web developer",
    name: "Marcus Rådell",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1182702044395778049/KT2I-JrX_400x400.jpg"
  });

  const view: React.FC = () => (
    <div className="h-screen w-screen">
      <profile.view />
    </div>
  );

  return {
    view
  };
};
