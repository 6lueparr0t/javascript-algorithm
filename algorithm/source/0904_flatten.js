function flatten(arr) {
  const result = [];

  function helper(helperArr) {
    for (let i of helperArr) {
      if (Array.isArray(i)) {
        helper(i);
      } else {
        result.push(i);
      }
    }
  }

  helper(arr);

  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
