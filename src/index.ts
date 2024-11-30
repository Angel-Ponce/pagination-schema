import { getRange, type MinMaxRange } from "./utils/get-range";
import { cleanSchema } from "./utils/clean-schema";

export type PaginationConfig = {
  total: number;
  perPage: number;
  currentPage: number;
  siblingCount?: number;
  boundaryCount?: number;
};

const generate = ({
  siblingCount = 1,
  boundaryCount = 0,
  ...config
}: PaginationConfig) => {
  if (
    config.perPage <= 0 ||
    config.total < 0 ||
    config.currentPage <= 0 ||
    siblingCount < 0 ||
    boundaryCount < 0
  )
    return [];

  const pages = new Array(Math.ceil(config.total / config.perPage))
    .fill(0)
    .map((_o, i) => i + 1);

  if (
    pages.length <= 3 ||
    pages.length <= siblingCount * 2 + boundaryCount * 2 + 3
  )
    return pages;

  const minMax: MinMaxRange = [1, pages[pages.length - 1]];

  const startRange = getRange(1, boundaryCount, minMax);

  const endRange = getRange(
    pages[pages.length - boundaryCount - 1],
    boundaryCount,
    minMax
  );

  const middleRange = getRange(
    config.currentPage - siblingCount,
    siblingCount * 2,
    minMax
  ).filter((value) => !startRange.includes(value) && !endRange.includes(value));

  return cleanSchema([...startRange, 0, ...middleRange, 0, ...endRange]);
};

export default generate;
