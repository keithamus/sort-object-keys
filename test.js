const assert = require('assert');
const sortObject = require('.');

assert.equal(JSON.stringify(sortObject({
  c: 1,
  b: 1,
  d: 1,
  a: 1,
})), JSON.stringify({
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
