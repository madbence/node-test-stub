# test-stub

> Stub generator for tests

## install

install the [package](https://npmjs.com/test-stub) with [`npm`](https://npmjs.com):

```sh
$ npm install test-stub
```

## usage

```js
import stub from 'test-stub';
const fn = stub(
  (a, b) => a + b,
  (a, b) => a * b
);

console.log(fn(1, 2)); // 3
console.log(fn(3, 4)); // 12
```

## api

### `stub(...fns)`

Creates a functions that calls `fns[0]` on the first, `fns[1]` on the second call (and so on).

## license

MIT
