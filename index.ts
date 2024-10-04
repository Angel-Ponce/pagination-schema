export type PaginationConfig = {
  total: number;
  perPage: number;
  currentPage: number;
};

const generate = (config: PaginationConfig) => {
  const pages = new Array(Math.ceil(config.total / config.perPage))
    .fill(0)
    .map((_o, i) => i + 1);

  if (pages.length <= 7) {
    return pages;
  }

  const start = [pages[0], pages[1]];
  const final = [pages[pages.length - 2], pages[pages.length - 1]];

  const startNearest = start[1] == config.currentPage - 1;
  const finalNearest = final[0] == config.currentPage + 1;

  if (
    start.includes(config.currentPage) ||
    final.includes(config.currentPage)
  ) {
    return [...start, start[1] + 1, 0, final[0] - 1, ...final];
  }

  if (startNearest) {
    return [...start, start[1] + 1, start[1] + 2, 0, ...final];
  }

  if (finalNearest) {
    return [...start, 0, final[0] - 2, final[0] - 1, ...final];
  }

  return [
    start[0],
    0,
    config.currentPage - 1,
    config.currentPage,
    config.currentPage + 1,
    0,
    final[1],
  ];
};

export default generate;
