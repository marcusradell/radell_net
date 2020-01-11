import { Observable } from "rxjs";
import { useState, useEffect } from "react";

export type UseStream = <T>(stream: Observable<T>, initialState: T) => T;

export const useStream: UseStream = (stream, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const sub = stream.subscribe(x => setState(x));

    return () => {
      // TODO: Check when unsubscriptions really trigger.
      console.log("UNSUB!");
      sub.unsubscribe();
    };
  }, []);

  return state;
};
