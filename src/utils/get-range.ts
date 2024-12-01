export type MinMaxRange = [min: number, max: number];

export const getRange = (start: number, length: number, minMax?: MinMaxRange) =>
  [start, ...Array.from({ length }, (_, index) => start + index + 1)].filter(
    (value) => (minMax ? value >= minMax[0] && value <= minMax[1] : true)
  );
