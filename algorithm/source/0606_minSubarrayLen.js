function minSubArrayLen(arr, num) {
     let sum = 0;
     let start = 0;
     let counter = 0;
     let i = 0;
    let test = [];

     while (start < arr.length) {
         if (arr[i] > num) return 1;

         if (sum < num) {
             sum += arr[i];
             test.push(arr[i]);
         } else {
             if(i < arr.length) {
                 sum = sum + arr[i] - arr[start];
                 test.push(arr[i]);
                 test=test.slice(1);
             } else {
                 sum = sum - arr[start];
                 test=test.slice(1);
             }
             start++;
         }

         console.log(test);
         if(i < arr.length) {
             i++;
         }

         if (sum === num && i === arr.length) {
             return counter;
         }
     }
 
     return counter;
 }

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0