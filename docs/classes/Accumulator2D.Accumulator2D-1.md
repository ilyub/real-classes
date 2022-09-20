[TypeScript classes](../index.md) / [Exports](../modules.md) / [Accumulator2D](../modules/Accumulator2D.md) / Accumulator2D

# Class: Accumulator2D<K, L, T\>

[Accumulator2D](../modules/Accumulator2D.md).Accumulator2D

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

## Table of contents

### Constructors

- [constructor](Accumulator2D.Accumulator2D-1.md#constructor)

### Properties

- [map](Accumulator2D.Accumulator2D-1.md#map)

### Methods

- [[iterator]](Accumulator2D.Accumulator2D-1.md#[iterator])
- [get](Accumulator2D.Accumulator2D-1.md#get)
- [push](Accumulator2D.Accumulator2D-1.md#push)
- [unshift](Accumulator2D.Accumulator2D-1.md#unshift)
- [values](Accumulator2D.Accumulator2D-1.md#values)

## Constructors

### constructor

• **new Accumulator2D**<`K`, `L`, `T`\>(`source?`)

Creates class instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `Iterable`<[`Entry`](../modules/Accumulator2D.Accumulator2D.md#entry)<`K`, `L`, `T`\>\> | `[]` | Source. |

## Properties

### map

• `Protected` `Readonly` **map**: `Map`<`K`, `Map`<`L`, `T`[]\>\>

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`Entry`](../modules/Accumulator2D.Accumulator2D.md#entry)<`K`, `L`, `T`\>\>

#### Returns

`IterableIterator`<[`Entry`](../modules/Accumulator2D.Accumulator2D.md#entry)<`K`, `L`, `T`\>\>

___

### get

▸ **get**(`key`): `ReadonlyMap`<`L`, readonly `T`[]\>

Returns map of arrays at given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |

#### Returns

`ReadonlyMap`<`L`, readonly `T`[]\>

Map of arrays.

▸ **get**(`key1`, `key2`): readonly `T`[]

Returns array at given keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |

#### Returns

readonly `T`[]

Array.

___

### push

▸ **push**(`key1`, `key2`, `value`): `void`

Pushes value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### unshift

▸ **unshift**(`key1`, `key2`, `value`): `void`

Unshifts value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### values

▸ **values**(): `IterableIterator`<readonly `T`[]\>

Returns values.

#### Returns

`IterableIterator`<readonly `T`[]\>
