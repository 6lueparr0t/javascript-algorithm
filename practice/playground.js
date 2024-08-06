function isPalindrome(target) {
  // your code here
  let str1 = target.split("");
  let str2 = [];

  function helper(input) {
    if (input.length <= 0) return str2.join("");
    str2.push(input.pop());
    return helper(input);
  }

  let result = helper(str1);

  return target === result;
}

console.log(isPalindrome("wowwowwowwow")); // false