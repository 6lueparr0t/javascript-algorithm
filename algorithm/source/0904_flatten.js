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

function flatten2(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

console.log(flatten2([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten2([[1], [2], [3]])); // [1,2,3]
console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
