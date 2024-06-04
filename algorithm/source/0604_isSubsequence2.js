function isSubsequence2(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if(!str1[0]) return true;
  if(!str2[0]) return false;
  if(str1[0] === str2[0]) return isSubsequence2(str1.slice(1), str2.slice(1));

  return isSubsequence2(str1, str2.slice(1));
}

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abraadabrac")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)
