import { Observable } from "rxjs";
import { useState, useEffect } from "react";

export type UseStream = <T>(stream: Observable<T>, initialState: T) => T;

export const useStream: UseStream = (stream, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const sub = stream.subscribe(x => setState(x));

    return () => sub.unsubscribe();
  }, []);

  return state;
};
