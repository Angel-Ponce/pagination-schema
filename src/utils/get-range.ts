export type MinMaxRange = [min: number, max: number];

export const getRange = (
  start: number,
  length: number,
  [min, max]: MinMaxRange
) =>
  [start, ...Array.from({ length }, (_, index) => start + index + 1)].filter(
    (value) => value >= min && value <= max
  );
