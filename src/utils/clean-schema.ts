export const cleanSchema = (dirtySchema: number[]) => {
  let cleanSchema: number[] = [];

  dirtySchema.forEach((value) => {
    if (!cleanSchema.includes(value) || value === 0) cleanSchema.push(value);
  });

  cleanSchema = cleanSchema.filter((value, index) => {
    if (value !== 0) return true;
    else return cleanSchema[index + 1] !== 0;
  });

  cleanSchema = cleanSchema.filter((value, index) => {
    if (value !== 0) return true;

    const previousValue = cleanSchema[index - 1];
    const nextValue = cleanSchema[index + 1];

    if (previousValue && nextValue)
      return Math.abs(nextValue - previousValue) !== 1;

    return true;
  });

  return cleanSchema;
};