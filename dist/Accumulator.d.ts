export declare class Accumulator<K extends PropertyKey, T> {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source?: Iterable<Accumulator.Entry<K, T>>);
    [Symbol.iterator](): IterableIterator<Accumulator.Entry<K, T>>;
    /**
     * Returns array at given key.
     *
     * @param key - Key.
     * @returns Array.
     */
    get(key: K): readonly T[];
    /**
     * Pushes value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    push(key: K, value: T): void;
    /**
     * Unshifts value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    unshift(key: K, value: T): void;
    /**
     * Returns values.
     */
    values(): IterableIterator<readonly T[]>;
    protected readonly map: Map<K, T[]>;
}
export declare namespace Accumulator {
    type Entry<K extends PropertyKey, T> = readonly [K, readonly T[]];
    type Locked<K extends PropertyKey, T> = Omit<Readonly<Accumulator<K, T>>, "push" | "unshift">;
}
//# sourceMappingURL=Accumulator.d.ts.map