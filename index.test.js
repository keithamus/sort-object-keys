import { test } from 'node:test'
import sortObject from './index.js'

test('sort keys by default', ({ assert }) => {
  assert.deepEqual(
    sortObject({
      c: 1,
      b: 1,
      d: 1,
      a: 1,
    }),
    {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
    },
  )
})

test('using an array of ordered keys', ({ assert }) => {
  assert.deepEqual(
    sortObject(
      {
        c: 1,
        b: 1,
        d: 1,
        a: 1,
      },
      ['b', 'a', 'd', 'c'],
    ),
    {
      b: 1,
      a: 1,
      d: 1,
      c: 1,
    },
  )
})

test('using comparator function', ({ assert }) => {
  function comparator(keyA, keyB) {
    const a = parseInt(keyA.slice(4))
    const b = parseInt(keyB.slice(4))
    return a - b
  }

  assert.deepEqual(
    sortObject(
      {
        'key-1': 1,
        'key-3': 1,
        'key-10': 1,
        'key-2': 1,
      },
      comparator,
    ),

    {
      'key-1': 1,
      'key-2': 1,
      'key-3': 1,
      'key-10': 1,
    },
  )
})

test('using array with some not-contained keys', ({ assert }) => {
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
})
