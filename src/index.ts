import { getRange, type MinMaxRange } from "./utils/get-range";
import { calibrateSchema } from "./utils/calibrate-schema";
import { cleanSchema } from "./utils/clean-schema";

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
    return [1];

  const totalPages = Math.ceil(config.total / config.perPage);

  const minPages = siblingCount * 2 + boundaryCount * 2 + 3;

  if (totalPages <= minPages)
    return Array.from({ length: totalPages }, (_, index) => index + 1);

  const minMax: MinMaxRange = [1, totalPages];

  const startRange = getRange(1, boundaryCount, minMax);

  const endRange = getRange(totalPages - boundaryCount, boundaryCount, minMax);

  const middleRange = getRange(
    config.currentPage - siblingCount,
    siblingCount * 2,
    minMax
  ).filter((value) => !startRange.includes(value) && !endRange.includes(value));

  const schema = cleanSchema([
    ...startRange,
    0,
    ...middleRange,
    0,
    ...endRange,
  ]);

  return autoCalibrate
    ? calibrateSchema(schema, config.currentPage, minPages)
    : schema;
};

export default generate;
