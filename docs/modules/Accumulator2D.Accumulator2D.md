[Typescript classes](../index.md) / [Exports](../modules.md) / [Accumulator2D](Accumulator2D.md) / Accumulator2D

# Namespace: Accumulator2D

[Accumulator2D](Accumulator2D.md).Accumulator2D

## Table of contents

### Type Aliases

- [Entry](Accumulator2D.Accumulator2D.md#entry)
- [Locked](Accumulator2D.Accumulator2D.md#locked)

## Type Aliases

### Entry

Ƭ **Entry**<`K`, `L`, `T`\>: readonly [`K`, `L`, readonly `T`[]]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

___

### Locked

Ƭ **Locked**<`K`, `L`, `T`\>: `Omit`<`Readonly`<[`Accumulator2D`](../classes/Accumulator2D.Accumulator2D-1.md)<`K`, `L`, `T`\>\>, ``"push"`` \| ``"unshift"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |
