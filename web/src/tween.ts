import {
  Observable,
  interval,
  animationFrameScheduler,
  defer,
  scheduled,
  of
} from "rxjs";
import { map, takeWhile, concatAll } from "rxjs/operators";

// TODO: Remove if not needed.
// LERP = Linear Interpolation

// export type Lerp = (current: number, nect: number) => number;

// export const lerp: Lerp = (current, next) => (next - current) * 0.1;

// export type Point = {
//   x: number;
//   y: number;
// };

// export type LerpPoint = (current: Point, next: Point) => Point;

// export const lerpPoint: LerpPoint = (current, next) => ({
//   x: lerp(current.x, next.x),
//   y: lerp(current.y, next.y)
// });

export type Duration = (ms: number) => Observable<number>;

export const duration: Duration = ms =>
  defer<Observable<number>>(() => {
    const start = Date.now();
    return scheduled(
      [
        interval(0, animationFrameScheduler).pipe(
          map(() => (Date.now() - start) / ms),
          takeWhile(n => n < 1)
        ),
        of(1)
      ],
      animationFrameScheduler
    ).pipe(concatAll());
  });

export type Tween = (
  start: number,
  end: number,
  ms: number
) => Observable<number>;

export const tween: Tween = (start, end, ms) =>
  duration(ms).pipe(map(ratio => ratio * (end - start) + start));
