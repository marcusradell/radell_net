import React, { useEffect, useState } from "react";
import s from "./styles.module.css";
import { Actions, createModel } from "./model";
import { useStore } from "rx-machine";
import { Observable } from "rxjs";

export type Notification = {
  View: React.FC;
  actions: Actions;
};

export type NotificationFactory = () => Notification;

type UseAnimation = <T>(stream: Observable<T>, initialState: T) => T;

const useAnimation: UseAnimation = (stream, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const sub = stream.subscribe(x => setState(x));

    return () => sub.unsubscribe();
  }, []);

  return state;
};

export const notificationFactory: NotificationFactory = () => {
  const { initialStore, storeStream, actions, animationStream } = createModel();

  const View = () => {
    const store = useStore(initialStore, storeStream);

    const state = useAnimation(animationStream, 0);

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
