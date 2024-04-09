function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let holder = 0;
  let checker = 0;

  while (checker < str2.length) {
    if (holder.length === str1.length) break;
    if (str1[holder] === str2[checker]) {
      holder++;
    }
    checker++;
  }

  return str1.length === holder ? true : false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abraadabrac")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
