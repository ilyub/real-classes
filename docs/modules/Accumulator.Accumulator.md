[Typescript classes](../index.md) / [Exports](../modules.md) / [Accumulator](Accumulator.md) / Accumulator

# Namespace: Accumulator

[Accumulator](Accumulator.md).Accumulator

## Table of contents

### Type Aliases

- [Entry](Accumulator.Accumulator.md#entry)
- [Locked](Accumulator.Accumulator.md#locked)

## Type Aliases

### Entry

Ƭ **Entry**<`K`, `T`\>: readonly [`K`, readonly `T`[]]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### Locked

Ƭ **Locked**<`K`, `T`\>: `Omit`<`Readonly`<[`Accumulator`](../classes/Accumulator.Accumulator-1.md)<`K`, `T`\>\>, ``"push"`` \| ``"unshift"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |
