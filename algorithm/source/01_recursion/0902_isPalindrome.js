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

function isPalindrome3(str) {
  // 빈도수를 저장할 객체 생성
  const charCount = {};

  // 각 문자의 빈도수를 객체에 저장
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 홀수 개수의 문자의 수를 세기 위한 변수
  let oddCount = 0;

  let result = true;
  // 각 문자의 빈도를 확인하여 홀수 개수가 몇 개인지 확인
  Object.keys(charCount).map((key) => {
    charCount[key] % 2 !== 0 && oddCount++;
    if (oddCount > 1) result = false;
  })

  return result;
}

// console.log(isPalindrome("awesome"));
// console.log(isPalindrome("tacocat"));

// console.log(isPalindrome2("awesome"));
// console.log(isPalindrome2("tacocat"));

console.log(isPalindrome3("aabb"));
console.log(isPalindrome3("abc"));
