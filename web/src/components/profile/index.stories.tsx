import React from "react";
import { ProfileFactory } from ".";
import "../../index.css";

const profile = ProfileFactory({
  title: "Web developer",
  name: "Marcus Rådell",
  imageUrl:
    "https://pbs.twimg.com/profile_images/1182702044395778049/KT2I-JrX_400x400.jpg"
});

export default {
  title: "profile",
  component: profile.view
};

export const ProfileView = () => <profile.view />;
