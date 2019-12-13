import React, { useEffect, useState } from "react";
import s from "./styles.module.css";
import { Subject, merge, of } from "rxjs";
import { tap, switchMap, delay } from "rxjs/operators";

export type Notification = {
  View: React.FC;
  actions: {
    notify: (m: string) => void;
    setVisible: (v: boolean) => void;
  };
};

export type NotificationFactory = () => Notification;

export const notificationFactory: NotificationFactory = () => {
  const notifySubject = new Subject<string>();
  const visibleSubject = new Subject<boolean>();

  const View = () => {
    const [message, setMessage] = useState("TEMP");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const subscription = merge(
        notifySubject.pipe(
          tap(setMessage),
          tap(() => setVisible(true)),
          switchMap(() => of(null).pipe(delay(3000))),
          tap(() => setVisible(false))
        ),
        visibleSubject.pipe(
          tap(setVisible),
          switchMap(v => of(!v).pipe(delay(3000))),
          tap(setVisible)
        )
      ).subscribe();
      return () => subscription.unsubscribe();
    }, []);
    return (
      <div className={`${s.notification} ${visible ? s.visible : ""}`}>
        {message}
      </div>
    );
  };

  const actions = {
    notify: (m: string) => notifySubject.next(m),
    setVisible: (v: boolean) => visibleSubject.next(v)
  };

  return {
    View,
    actions
  };
};
