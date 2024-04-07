function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  const lookup = {};
  for (let i = 0; i< arr.length; i++) {
      let letter = String(arr[i]);
      if(lookup[letter]) {
         return true; 
      } else {
         lookup[letter] = 1;
      }
  }
  
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 