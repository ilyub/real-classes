import { Accumulator } from "@";
import { a } from "real-fns";

test.each([
  { expected: [1, 2], key: "a" },
  { expected: [3], key: "b" },
  { expected: [], key: "c" }
])("get", ({ expected, key }) => {
  const accumulator = new Accumulator<string, number>([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(accumulator.get(key)).toStrictEqual(expected);
});

test("push", () => {
  const accumulator = new Accumulator<string, number>();

  const expected = [
    ["a", [1, 2]],
    ["b", [3]]
  ] as const;

  accumulator.push("a", 1);
  accumulator.push("a", 2);
  accumulator.push("b", 3);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("unshift", () => {
  const accumulator = new Accumulator<string, number>();

  const expected = [
    ["a", [2, 1]],
    ["b", [3]]
  ] as const;

  accumulator.unshift("a", 1);
  accumulator.unshift("a", 2);
  accumulator.unshift("b", 3);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("values", () => {
  const accumulator = new Accumulator<string, number>([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(a.fromIterable(accumulator.values())).toStrictEqual([[1, 2], [3]]);
});
