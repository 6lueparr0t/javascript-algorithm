function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    let c = String(arr[i]);
    lookup[c] = ++lookup[c] || 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let c = String(arr[i]);
    if (lookup[c] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
