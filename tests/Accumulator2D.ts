import { ReadonlyMap, a } from "real-fns";
import { Accumulator2D } from "@";

test.each([
  { expected: [1, 2], key1: "a", key2: "x" },
  { expected: [3], key1: "b", key2: "y" },
  { expected: [], key1: "c", key2: "z" }
])("get: array", ({ expected, key1, key2 }) => {
  const accumulator = new Accumulator2D<string, string, number>([
    ["a", "x", [1, 2]],
    ["b", "y", [3]]
  ]);

  expect(accumulator.get(key1, key2)).toStrictEqual(expected);
});

test.each([
  { expected: new ReadonlyMap([["x", [1, 2]]]), key: "a" },
  { expected: new ReadonlyMap([["y", [3]]]), key: "b" },
  { expected: new ReadonlyMap(), key: "c" }
])("get: map", ({ expected, key }) => {
  const accumulator = new Accumulator2D<string, string, number>([
    ["a", "x", [1, 2]],
    ["b", "y", [3]]
  ]);

  expect(accumulator.get(key)).toStrictEqual(expected);
});

test("push", () => {
  const accumulator = new Accumulator2D<string, string, number>();

  const expected = [
    ["a", "x", [1, 2]],
    ["a", "y", [3]],
    ["b", "z", [4]]
  ] as const;

  accumulator.push("a", "x", 1);
  accumulator.push("a", "x", 2);
  accumulator.push("a", "y", 3);
  accumulator.push("b", "z", 4);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("unshift", () => {
  const accumulator = new Accumulator2D<string, string, number>();

  const expected = [
    ["a", "x", [2, 1]],
    ["a", "y", [3]],
    ["b", "z", [4]]
  ] as const;

  accumulator.unshift("a", "x", 1);
  accumulator.unshift("a", "x", 2);
  accumulator.unshift("a", "y", 3);
  accumulator.unshift("b", "z", 4);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("values", () => {
  const accumulator = new Accumulator2D<string, string, number>([
    ["a", "x", [1, 2]],
    ["b", "y", [3]]
  ]);

  expect(a.fromIterable(accumulator.values())).toStrictEqual([[1, 2], [3]]);
});
