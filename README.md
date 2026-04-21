# Sort Object Keys

![Test](https://github.com/keithamus/sort-object-keys/actions/workflows/test.yml/badge.svg)

Returns a copy of an object with all keys sorted.

The second argument is optional and is used for ordering - to provide custom sorts. You can either pass an array containing ordered keys or a function to sort the keys (same signature as in [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)).

```js
import assert from 'assert'
import sortObject from 'sort-object-keys'

assert.equal(
  JSON.stringify({
    c: 1,
    b: 1,
    d: 1,
    a: 1,
  }),
  JSON.stringify({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
  }),
)

assert.equal(
  JSON.stringify(
    sortObject(
      {
        c: 1,
        b: 1,
        d: 1,
        a: 1,
      },
      ['b', 'a', 'd', 'c'],
    ),
  ),
  JSON.stringify({
    b: 1,
    a: 1,
    d: 1,
    c: 1,
  }),
)

assert.equal(
  JSON.stringify(
    sortObject(
      {
        'key-1': 1,
        'key-3': 1,
        'key-10': 1,
        'key-2': 1,
      },
      (a, b) => parseInt(a.slice(4)) - parseInt(b.slice(4)),
    ),
  ),
  JSON.stringify({
    'key-1': 1,
    'key-2': 1,
    'key-3': 1,
    'key-10': 1,
  }),
)
```
