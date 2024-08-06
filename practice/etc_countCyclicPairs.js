/**
For a = [13, 5604, 31, 2, 13, 4560, 546, 654, 456], the output should be solution(a) = 5.

There are 5 cyclic pairs of numbers - pairs which are equal to each other after cyclic shifts.

a[0] = 13 and a[2] = 31 (i = 0 and j = 2),
a[0] = 13 and a[4] = 13 (i = 0 and j = 4),
a[2] = 31 and a[4] = 13 (i = 2 and j = 4),
a[1] = 5604 and a[5] = 4560 (i = 1 and j = 5),
a[6] = 546 and a[7] = 654 (i = 6 and j = 7)
Note that a[6] = 546 and a[8] = 456 are not cyclic pairs — 546 can only be paired with cyclic shift of 546, 465 and 654.
Also, note that a[5] = 4560 and a[8] = 456 are not cyclic pairs because they have different number of digits.

*/

function countCyclicPairs(arr) {

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i].toString();
      let b = arr[j].toString();
      if (a.length === b.length && (a + a).includes(b)) {
        count++;
      }
    }
  }
  return count;
}

console.log(countCyclicPairs([13, 5604, 31, 2, 13, 4560, 546, 654, 456]));
console.log(countCyclicPairs([5, 5, 5, 1, 2, 3, 456, 4567, 564]));