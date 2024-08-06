function countCyclicPairs(arr) {

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i].toString();
      let b = arr[j].toString();
      if (a.length === b.length && (a+a).includes(b)) {
        count++;
      }
    }
  }
  return count;
}

console.log(countCyclicPairs([13, 5604, 31, 2, 13, 4560, 546, 654, 456]));
console.log(countCyclicPairs([5, 5, 5, 1, 2, 3, 456, 4567, 564]));