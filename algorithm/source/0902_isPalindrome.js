function isPalindrome(str) {
  let str_arr1 = str.split("");
  let str_arr2 = [];

  function helper(input) {
    if (input <= 0) return str_arr2.join("");
    str_arr2.push(input.pop());
    return helper(input);
  }

  let result = helper(str_arr1);

  return str === result;
}

function isPalindrome2(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome2(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat"));

console.log(isPalindrome2("awesome"));
console.log(isPalindrome2("tacocat"));
