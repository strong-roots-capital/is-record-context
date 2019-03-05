
is-record-context [![Build status](https://travis-ci.org/strong-roots-capital/is-record-context.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-record-context) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-record-context.svg)](https://npmjs.org/package/@strong-roots-capital/is-record-context) [![codecov](https://codecov.io/gh/strong-roots-capital/is-record-context/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-record-context)
======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Type-guard for RecordContext

Install
-------

```shell
npm install @strong-roots-capital/is-record-context
```

Use
---

```typescript
import isRecordContext from '@strong-roots-capital/is-record-context'

const object = fetchMysteryObject()
if (isRecordContext(object)) {
    console.log(object.tradepair) // ok
} else {
    console.log(object.tradepair) // error!
}
```

Related
-------

*   [record-context](https://github.com/strong-roots-capital/record-context)

## Index

### Functions

* [isRecordContext](#isrecordcontext)

---

## Functions

<a id="isrecordcontext"></a>

###  isRecordContext

▸ **isRecordContext**(object: *`any`*): `boolean`

*Defined in [is-record-context.ts:12](https://github.com/strong-roots-capital/is-record-context/blob/4dcf34c/src/is-record-context.ts#L12)*

Type-guard for `RecordContext`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `any` |

**Returns:** `boolean`

___

