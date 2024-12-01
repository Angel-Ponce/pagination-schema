import { getRange } from "./get-range";

const linealSchema = (schema: number[]) => {
  const linealSchema: number[] = [];

  schema.forEach((value, index) => {
    if (value !== 0) linealSchema.push(value);
    else {
      const previous = schema[index - 1];
      const next = schema[index + 1];

      if (previous && next && Math.abs(next - previous) === 2)
        linealSchema.push(previous + 1);
      else linealSchema.push(value);
    }
  });

  return linealSchema;
};

export const calibrateSchema = (
  schema: number[],
  currentPage: number,
  minLength: number
) => {
  if (schema.filter((value) => value === 0).length === 2)
    return linealSchema(schema);

  const zeroIndex = schema.indexOf(0);
  const currentPageIndex = schema.indexOf(currentPage);
  const lengthDiff = minLength - schema.filter((value) => value !== 0).length;

  if (zeroIndex === -1 || currentPageIndex === -1) return linealSchema(schema);

  let newSchema = [...schema];

  if (currentPageIndex < zeroIndex) {
    newSchema.splice(
      zeroIndex,
      0,
      ...getRange(schema[zeroIndex - 1] + 1, lengthDiff)
    );
  } else {
    newSchema.splice(
      zeroIndex + 1,
      0,
      ...getRange(schema[zeroIndex + 1] - lengthDiff - 1, lengthDiff)
    );
  }

  return linealSchema(newSchema);
};
