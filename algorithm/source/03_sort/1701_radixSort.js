// returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(arr) {
  let maxDigits = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for(let k=0; k<maxDigitCount; k++) {
    let digitBuckets = Array.from({length:10}, ()=>[]);
    for(let i=0; i<nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = digitBuckets.flat();
  }

  return nums;
}

// console.log("getDigit(12345, 0) : ", getDigit(12345, 0)); // 5
// console.log("getDigit(12345, 1) : ", getDigit(12345, 1)); // 4
// console.log("getDigit(12345, 2) : ", getDigit(12345, 2)); // 3

// console.log("digitCount(1) : ", digitCount(1)); // 1
// console.log("digitCount(25) : ", digitCount(25)); // 2
// console.log("digitCount(314) : ", digitCount(314)); // 3

// console.log("mostDigits([1234, 56, 7]) : ", mostDigits([1234, 56, 7])); // 4

console.log(radixSort([23,345,5467,12,2345,9852]));

