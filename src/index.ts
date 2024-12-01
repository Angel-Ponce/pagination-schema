import { getRange, type MinMaxRange } from "./utils/get-range";
import { cleanSchema } from "./utils/clean-schema";
import { calibrateSchema } from "./utils/calibrate-schema";

export type PaginationConfig = {
  total: number;
  perPage: number;
  currentPage: number;
  siblingCount?: number;
  boundaryCount?: number;
  autoCalibrate?: boolean;
};

const generate = ({
  siblingCount = 1,
  boundaryCount = 0,
  autoCalibrate = true,
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

  const minLength = siblingCount * 2 + boundaryCount * 2 + 3;

  if (pages.length <= minLength) return pages;

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

  let schema = cleanSchema([...startRange, 0, ...middleRange, 0, ...endRange]);

  return autoCalibrate
    ? calibrateSchema(schema, config.currentPage, minLength)
    : schema;
};

export default generate;
