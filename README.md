Sort Object

[![Build Status](https://travis-ci.org/keithamus/sort-object-keys.svg)](https://travis-ci.org/keithamus/sort-object-keys)

Returns a copy of an object with all keys sorted.

You can pass an array of keys, which it will use for ordering - to provide custom sorts.

```js
const assert = require('assert');
const sortObject = require('sort-object-keys');

assert.equal(JSON.stringify({
  c: 1,
  b: 1,
  d: 1,
  a: 1,
}), JSON.stringify({
  a: 1,
  b: 1,
  c: 1,
  d: 1,
}));

assert.equal(JSON.stringify(sortObject({
  c: 1,
  b: 1,
  d: 1,
  a: 1,
}, ['b', 'a', 'd', 'c'])), JSON.stringify({
  b: 1,
  a: 1,
  d: 1,
  c: 1,
}));
```
