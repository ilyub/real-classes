export declare class Accumulator2D<K extends PropertyKey, L extends PropertyKey, T> {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source?: Iterable<Accumulator2D.Entry<K, L, T>>);
    [Symbol.iterator](): IterableIterator<Accumulator2D.Entry<K, L, T>>;
    /**
     * Returns map of arrays at given key.
     *
     * @param key - Key.
     * @returns Map of arrays.
     */
    get(key: K): ReadonlyMap<L, readonly T[]>;
    /**
     * Returns array at given keys.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @returns Array.
     */
    get(key1: K, key2: L): readonly T[];
    /**
     * Pushes value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    push(key1: K, key2: L, value: T): void;
    /**
     * Unshifts value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    unshift(key1: K, key2: L, value: T): void;
    /**
     * Returns values.
     */
    values(): IterableIterator<readonly T[]>;
    protected readonly map: Map<K, Map<L, T[]>>;
}
export declare namespace Accumulator2D {
    type Entry<K extends PropertyKey, L extends PropertyKey, T> = readonly [K, L, readonly T[]];
    type Locked<K extends PropertyKey, L extends PropertyKey, T> = Omit<Readonly<Accumulator2D<K, L, T>>, "push" | "unshift">;
}
//# sourceMappingURL=Accumulator2D.d.ts.map