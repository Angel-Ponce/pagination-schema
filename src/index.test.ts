import generate from "./index";

test("single page", (onFinish) => {
  expect(generate({ total: 1, perPage: 10, currentPage: 1 })).toEqual([1]);

  onFinish();
});

test("invalid configuration", (onFinish) => {
  expect(generate({ total: -1, perPage: 1, currentPage: 1 })).toEqual([1]);

  expect(generate({ total: 10, perPage: 0, currentPage: 1 })).toEqual([1]);

  expect(generate({ total: 10, perPage: 1, currentPage: 0 })).toEqual([1]);

  expect(
    generate({ total: 10, perPage: 1, currentPage: 1, boundaryCount: -1 })
  ).toEqual([1]);

  expect(
    generate({ total: 10, perPage: 1, currentPage: 1, siblingCount: -1 })
  ).toEqual([1]);

  onFinish();
});

test("calibrated miscellaneous", (onFinish) => {
  expect(generate({ total: 100, perPage: 5, currentPage: 10 })).toEqual([
    1, 0, 9, 10, 11, 0, 20,
  ]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      siblingCount: 2,
    })
  ).toEqual([1, 0, 8, 9, 10, 11, 12, 0, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 9, 10, 11, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      boundaryCount: 4,
      siblingCount: 3,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 1,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 2,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 3,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 4,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 5,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 6,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 20,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 19,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 18,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 16,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 15,
      boundaryCount: 2,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 230,
      perPage: 10,
      currentPage: 15,
      boundaryCount: 1,
      siblingCount: 4,
    })
  ).toEqual([1, 2, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 22, 23]);

  onFinish();
});

test("no calibrated miscellaneous", (onFinish) => {
  expect(
    generate({ total: 100, perPage: 5, currentPage: 10, autoCalibrate: false })
  ).toEqual([1, 0, 9, 10, 11, 0, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      siblingCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 0, 8, 9, 10, 11, 12, 0, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 9, 10, 11, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 10,
      boundaryCount: 4,
      siblingCount: 3,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 1,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 2,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 3,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 4, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 4,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 4, 5, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 5,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 6,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 20,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 19,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 18,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 16,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 100,
      perPage: 5,
      currentPage: 15,
      boundaryCount: 2,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 3, 0, 14, 15, 16, 17, 18, 19, 20]);

  expect(
    generate({
      total: 230,
      perPage: 10,
      currentPage: 15,
      boundaryCount: 1,
      siblingCount: 4,
      autoCalibrate: false,
    })
  ).toEqual([1, 2, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 22, 23]);

  onFinish();
});
