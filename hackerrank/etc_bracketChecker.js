function bracketChecker(str) {
  const open = ["{", "[", "("];
  const close = ["}", "]", ")"];

  const result = [0, 0];
  for (let c of str) {
    if (open.includes(c)) {
      result[0]++;
    } else if (close.includes(c)) {
      result[1]++;
    }
  }

  return result[0] - result[1] === 0 ? true : false;
}

console.log(bracketChecker("[][]{{()}}")); // true
console.log(bracketChecker("[][]{{(}}")); // false
