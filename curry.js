function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }
    // to allow the use of partial apllicaton, we have to return a new function copy
    else {
      return (...arg2) => {
        return curried.apply(null, [...args, ...arg2]);
      };
    }
  };
}
