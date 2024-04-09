function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let holder = 0;
  let checker = 0;

  if (!str1) return true;
  while (checker < str2.length) {
    if (str1[holder] === str2[checker]) {
      holder++;
    }
    if (holder === str1.length) return true;
    checker++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abraadabrac")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
