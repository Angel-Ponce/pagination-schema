import generate from "./index";

const validate = (obtainedPages: number[], expectedPages: number[]) => {
  if (obtainedPages.join(",") === expectedPages.join(",")) return null;
  else
    return `Bad pagination schema, Getting [${obtainedPages}], Expected: [${expectedPages}]`;
};

test("Single page", (onFinish) => {
  const pages = generate({ total: 1, perPage: 10, currentPage: 1 });

  onFinish(validate(pages, [1]));
});
