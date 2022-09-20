export class Accumulator<K extends PropertyKey, T> {
  /**
   * Creates class instance.
   *
   * @param source - Source.
   */
  public constructor(source: Iterable<Accumulator.Entry<K, T>> = []) {
    for (const [key, arr] of source)
      for (const value of arr) this.push(key, value);
  }

  public *[Symbol.iterator](): IterableIterator<Accumulator.Entry<K, T>> {
    for (const [key, value] of this.map) yield [key, value];
  }

  /**
   * Returns array at given key.
   *
   * @param key - Key.
   * @returns Array.
   */
  public get(key: K): readonly T[] {
    return this.map.get(key) ?? [];
  }

  /**
   * Pushes value.
   *
   * @param key - Key.
   * @param value - Value.
   */
  public push(key: K, value: T): void {
    const arr = this.map.get(key);

    if (arr) arr.push(value);
    else this.map.set(key, [value]);
  }

  /**
   * Unshifts value.
   *
   * @param key - Key.
   * @param value - Value.
   */
  public unshift(key: K, value: T): void {
    const arr = this.map.get(key);

    if (arr) arr.unshift(value);
    else this.map.set(key, [value]);
  }

  /**
   * Returns values.
   */
  public *values(): IterableIterator<readonly T[]> {
    for (const arr of this.map.values()) yield arr;
  }

  // eslint-disable-next-line misc/real-fns/prefer-readonly-map, misc/typescript/prefer-readonly-array -- Ok
  protected readonly map = new Map<K, T[]>();
}

export namespace Accumulator {
  // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
  export type Entry<K extends PropertyKey, T> = readonly [K, readonly T[]];

  export type Locked<K extends PropertyKey, T> = Omit<
    Readonly<Accumulator<K, T>>,
    "push" | "unshift"
  >;
}
