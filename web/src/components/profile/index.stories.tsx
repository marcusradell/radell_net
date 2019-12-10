import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { Profile } from ".";

const profile = Profile();

export default {
  title: "profile",
  component: profile.view
};

export const ProfileView = () => <profile.view />;
