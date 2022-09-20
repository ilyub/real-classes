[Typescript classes](../index.md) / [Exports](../modules.md) / [Accumulator](../modules/Accumulator.md) / Accumulator

# Class: Accumulator<K, T\>

[Accumulator](../modules/Accumulator.md).Accumulator

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

## Table of contents

### Constructors

- [constructor](Accumulator.Accumulator-1.md#constructor)

### Properties

- [map](Accumulator.Accumulator-1.md#map)

### Methods

- [[iterator]](Accumulator.Accumulator-1.md#[iterator])
- [get](Accumulator.Accumulator-1.md#get)
- [push](Accumulator.Accumulator-1.md#push)
- [unshift](Accumulator.Accumulator-1.md#unshift)
- [values](Accumulator.Accumulator-1.md#values)

## Constructors

### constructor

• **new Accumulator**<`K`, `T`\>(`source?`)

Creates class instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `Iterable`<[`Entry`](../modules/Accumulator.Accumulator.md#entry)<`K`, `T`\>\> | `[]` | Source. |

## Properties

### map

• `Protected` `Readonly` **map**: `Map`<`K`, `T`[]\>

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`Entry`](../modules/Accumulator.Accumulator.md#entry)<`K`, `T`\>\>

#### Returns

`IterableIterator`<[`Entry`](../modules/Accumulator.Accumulator.md#entry)<`K`, `T`\>\>

___

### get

▸ **get**(`key`): readonly `T`[]

Returns array at given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |

#### Returns

readonly `T`[]

Array.

___

### push

▸ **push**(`key`, `value`): `void`

Pushes value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### unshift

▸ **unshift**(`key`, `value`): `void`

Unshifts value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### values

▸ **values**(): `IterableIterator`<readonly `T`[]\>

Returns values.

#### Returns

`IterableIterator`<readonly `T`[]\>
