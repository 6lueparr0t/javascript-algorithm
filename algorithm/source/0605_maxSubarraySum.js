function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length < num) return null;
  let sum = 0;
  for(let i=0; i<num; i++) {
      sum += arr[i];
  }
  
  let next = sum;
  let result = 0;
  for(let i=num; i<arr.length; i++) {
      next = next + arr[i] - arr[i-num];
      result = Math.max(result, next);
  }
  
  return result;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) ) // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null