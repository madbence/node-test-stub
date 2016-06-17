const assert = require('assert');
const stub = require('.');

const add = stub((a, b) => a + b);

assert.equal(add(1, 2), 3);
assert.throws(() => add(1, 2));

const multi = stub(
  (a, b) => a * b,
  (a, b) => a / b
);

assert.equal(multi(10, 5), 50);
assert.equal(multi(10, 5), 2);
assert.throws(() => mult(10, 5));
