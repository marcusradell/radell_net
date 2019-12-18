import React from "react";
import s from "./styles.module.css";
import { Actions, createModel } from "./model";
import { useStore } from "rx-machine";
import { useStream } from "../../useStream";

export type Notification = {
  View: React.FC;
  actions: Actions;
};

export type NotificationFactory = () => Notification;

export const notificationFactory: NotificationFactory = () => {
  const { initialStore, storeStream, actions, animationStream } = createModel();

  const View = () => {
    const store = useStore(initialStore, storeStream);

    const state = useStream(animationStream, 0);

    return (
      <div
        className={`${s.notification} ${
          store.state === "visible" ? s.visible : ""
        }`}
      >
        <div className={s.countdown}>{state}</div>
        <div>{store.message}</div>
      </div>
    );
  };

  return {
    View,
    actions
  };
};
