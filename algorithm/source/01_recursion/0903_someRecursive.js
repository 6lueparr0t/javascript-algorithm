function someRecursive(arr, func) {
  let result = false;
  function helper() {
    if (arr.length === 0) return;
    if (func(arr.pop()) === true) {
      result = true;
      return;
    }

    helper();
  }

  helper();
  return result;
}

function someRecursive2(arr, func) {
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;

  return someRecursive2(arr.slice(1), func);
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

console.log(someRecursive2([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive2([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive2([4, 6, 8], isOdd)); // false
console.log(someRecursive2([4, 6, 8], (val) => val > 10)); // false
