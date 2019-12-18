// Linear Interpolation

export type Lerp = (current: number, nect: number) => number;

export const lerp: Lerp = (current, next) => (next - current) * 0.1;

export type Point = {
  x: number;
  y: number;
};

export type LerpPoint = (current: Point, next: Point) => Point;

export const lerpPoint: LerpPoint = (current, next) => ({
  x: lerp(current.x, next.x),
  y: lerp(current.y, next.y)
});
