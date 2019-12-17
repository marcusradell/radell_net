import { createStore, CreateAction, createAction } from "rx-machine";
import {
  delay,
  switchMap,
  takeUntil,
  take,
  map,
  startWith
} from "rxjs/operators";
import { of, merge, interval } from "rxjs";
import { animationFrame } from "rxjs/internal/scheduler/animationFrame";

export type VisibleStore = {
  state: "visible";
  message: string;
};

export type HiddenStore = {
  state: "hidden";
  message: string;
};

export type Store = VisibleStore | HiddenStore;

export type Chart = {
  visible: ["notify", "hide"];
  hidden: ["notify"];
};

export type NotifyReducer = (_: unknown, message: string) => VisibleStore;

const notifyReducer: NotifyReducer = (_, message) => ({
  state: "visible",
  message
});

export type HideReducer = (store: Store) => HiddenStore;

const hideReducer: HideReducer = store => ({
  state: "hidden",
  message: store.message
});

export type Actions = {
  notify: CreateAction<NotifyReducer>;
  hide: CreateAction<HideReducer>;
};

export const createModel = () => {
  const chart: Chart = {
    visible: ["notify", "hide"],
    hidden: ["notify"]
  };

  const initialStore: HiddenStore = {
    state: "hidden",
    message: ""
  };

  const notify = createAction(notifyReducer);
  const hideBase = createAction(hideReducer);
  const hide: Actions["hide"] = {
    ...hideBase,
    stream: merge(
      hideBase.stream,
      notify.stream.pipe(
        switchMap(() =>
          of(undefined).pipe(delay(3000), takeUntil(hideBase.stream))
        )
      )
    )
  };

  const actions: Actions = {
    notify,
    hide
  };

  const storeStream = createStore<Chart, Store, Actions>(
    chart,
    initialStore,
    actions
  );

  const animationStream = notify.stream.pipe(
    switchMap(() =>
      interval(1000, animationFrame).pipe(
        map(v => 2 - v),
        startWith(3),
        take(4)
      )
    )
  );

  return { initialStore, storeStream, actions, animationStream };
};
