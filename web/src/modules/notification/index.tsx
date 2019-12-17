import React, { useEffect, useState } from "react";
import s from "./styles.module.css";
import { Actions, createModel } from "./model";
import { useStore } from "rx-machine";

export type Notification = {
  View: React.FC;
  actions: Actions;
};

export type NotificationFactory = () => Notification;

export const notificationFactory: NotificationFactory = () => {
  const { initialStore, storeStream, actions, animationStream } = createModel();

  const View = () => {
    const store = useStore(initialStore, storeStream);

    const [state, setState] = useState(0);

    useEffect(() => {
      animationStream.forEach(n => setState(n));
    }, []);

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
