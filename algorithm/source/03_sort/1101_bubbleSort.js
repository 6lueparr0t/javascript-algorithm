const bubbleSort = (arr) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
      if (noSwaps === true) break;
    }
  }

  return arr;
};

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3])); // [-3, 8, 12, 29, 37, 45, 88]