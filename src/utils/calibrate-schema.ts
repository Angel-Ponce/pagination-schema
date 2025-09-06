import { getRange } from "./get-range";

export const calibrateSchema = (
  schema: number[],
  currentPage: number,
  minPages: number
) => {
  if (schema.length === minPages + 2) return schema;

  const zeroIndex = schema.indexOf(0);
  const currentPageIndex = schema.indexOf(currentPage);
  const lengthDiff = minPages + 2 - schema.length;

  if (zeroIndex === -1 || currentPageIndex === -1 || lengthDiff <= 0)
    return schema;

  let newSchema = [...schema];

  if (currentPageIndex < zeroIndex) {
    newSchema.splice(
      zeroIndex,
      0,
      ...getRange(schema[zeroIndex - 1] + 1, lengthDiff - 1)
    );
  } else {
    newSchema.splice(
      zeroIndex + 1,
      0,
      ...getRange(schema[zeroIndex + 1] - lengthDiff, lengthDiff - 1)
    );
  }

  return newSchema;
};
