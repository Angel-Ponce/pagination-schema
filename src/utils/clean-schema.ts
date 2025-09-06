export const cleanSchema = (schema: number[]) => {
  let cleanSchema: number[] = [];

  cleanSchema = schema.filter(
    (value) => value === 0 || !cleanSchema.includes(value)
  );

  cleanSchema = cleanSchema.filter(
    (value, index) => value !== 0 || cleanSchema[index + 1] !== 0
  );

  const linealSchema: number[] = [];

  cleanSchema.forEach((value, index) => {
    if (value !== 0) linealSchema.push(value);
    else {
      const previous = cleanSchema[index - 1];
      const next = cleanSchema[index + 1];

      if (previous && next && Math.abs(next - previous) === 2)
        return linealSchema.push(previous + 1);
      else if (previous && next && Math.abs(next - previous) !== 1)
        linealSchema.push(0);
    }
  });

  return linealSchema;
};
