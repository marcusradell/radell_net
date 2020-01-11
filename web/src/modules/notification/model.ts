import { createStore, CreateAction, createAction } from "rx-machine";
import {
  delay,
  switchMap,
  takeUntil,
  map,
  tap,
  concatAll,
  filter
} from "rxjs/operators";
import { of, merge, scheduled, animationFrameScheduler, defer } from "rxjs";
import { tween } from "../../tween";

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

  // const animationStream = notify.stream.pipe(
  //   switchMap(() =>
  //     interval(1000, animationFrame).pipe(
  //       map(v => 2 - v),
  //       startWith(3),
  //       take(4)
  //     )
  //   )
  // );

  let pos = -255;

  document.body.style.setProperty("--bottom", `${pos}px`);

  const animationStream = notify.stream.pipe(
    switchMap(() =>
      scheduled(
        [
          of(1).pipe(
            tap(o => {
              document.body.style.setProperty("--opacity", o.toString(10));
            })
          ),
          defer(() =>
            tween(pos, 50, 400).pipe(
              tap(p => {
                document.body.style.setProperty("--bottom", `${p}px`);
                pos = p;
              }),
              filter(() => false)
            )
          ),
          tween(3, 0, 3000).pipe(map(n => Math.ceil(n))),
          tween(1, 0.25, 1000).pipe(
            tap(o => {
              document.body.style.setProperty("--opacity", o.toString(10));
            }),
            filter(() => false)
          ),
          defer(() =>
            tween(pos, -255, 400).pipe(
              tap(p => {
                document.body.style.setProperty("--bottom", `${p}px`);
                pos = p;
              }),
              filter(() => false)
            )
          )
        ],
        animationFrameScheduler
      ).pipe(concatAll())
    )
  );

  return { initialStore, storeStream, actions, animationStream };
};
