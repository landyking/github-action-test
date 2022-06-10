var _ = require("lodash");
jest.setTimeout(3600 * 1000);

test("adds 1 + 2 to equal 3", () => {
  console.log("xxxx 1111111111", new Date());
  expect(1 + 2).toBe(3);
});

test("is nil", async () => {
  let a;
  console.log("xxxx 22222222222222222", new Date());
  expect(_.isNil(a)).toBe(true);
});
