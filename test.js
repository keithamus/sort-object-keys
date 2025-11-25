import assert from 'node:assert'
import sortObject from './index.js'

assert.equal(
  JSON.stringify(
    sortObject({
      c: 1,
      b: 1,
      d: 1,
      a: 1,
    }),
  ),
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

function removeKeyAncCompareIndex(keyA, keyB) {
  var a = parseInt(keyA.slice(4))
  var b = parseInt(keyB.slice(4))
  return a - b
}

assert.equal(
  JSON.stringify(
    sortObject(
      {
        'key-1': 1,
        'key-3': 1,
        'key-10': 1,
        'key-2': 1,
      },
      removeKeyAncCompareIndex,
    ),
  ),
  JSON.stringify({
    'key-1': 1,
    'key-2': 1,
    'key-3': 1,
    'key-10': 1,
  }),
)

assert.deepEqual(
  Object.keys(
    sortObject(
      {
        b: 1,
        a: 1,
      },
      ['a', 'b', 'c', 'd'],
    ),
  ),
  ['a', 'b'],
)
