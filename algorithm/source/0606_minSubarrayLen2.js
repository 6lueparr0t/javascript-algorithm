function minSubArrayLen(arr, num) {
    let sum = 0;
    let start = 0;
    let end = 0;
    let counter = Infinity;
    let test = [];

     while (start < arr.length) {
         console.log(test);
         if (sum < num && end < arr.length) {
             sum += arr[end];
             test.push(arr[end]);
             end++;
         } else if(sum >= num) {
             counter = Math.min(counter, end-start);
             sum -= arr[start];
             test=test.slice(1);
             start++;
         } else {
             break;
         }
     }
 
     return counter === Infinity ? 0 : counter;
 }

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0