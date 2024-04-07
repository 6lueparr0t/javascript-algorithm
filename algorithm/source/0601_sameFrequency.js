function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let first = String(num1);
  let second = String(num2);
  
  const lookup = {};
  for(let i=0; i<first.length; i++) {
      let c = first[i];
      lookup[c] = (++lookup[c] || 1);
  }
  
  for(let i=0; i<second.length; i++) {
      let c = second[i];
      if(!lookup[c]) {
          return false;
      } else {
          lookup[c]--;
      }
  }
  
  return true;
}

console.log(sameFrequency(182,218)); // true
console.log(sameFrequency(34, 14)); // false