module.exports = function gen(...fns) {
  let calls = 0;
  return function stub(...args) {
    return fns[calls++](...args);
  };
};
