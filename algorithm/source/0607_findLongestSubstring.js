function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let word = 0;
  let start = 0;
  let end = 0;
  let counter = 0;

  while (start < str.length) {
    if (end < str.length) {
      end++;
    } else {
      start++;
    }

    let sliceStr = str.slice(start, end);
    let setStr = Array.from(new Set(sliceStr)).join("");
    counter = Math.max(counter, setStr.length);

    if (sliceStr.length > setStr.length) {
      start++;
    }
  }

  return counter;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
