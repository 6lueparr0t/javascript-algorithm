// ChatGPT 보고 개선
function bracketChecker(str) {
  const open = ["{", "[", "("];
  const close = ["}", "]", ")"];

  const stack = [];
  for (let c of str) {
    if (open.includes(c)) {
      stack.push(c); // 여는 괄호인 경우 스택에 추가
    } else if (close.includes(c)) {
      if (open.indexOf(stack.pop()) !== close.indexOf(c)) {
        // 스택의 가장 위에 있는 여는 괄호와 짝이 맞는지 확인
        return false;
      }
    }
  }

  return stack.length === 0; // 스택이 비어있으면 모든 괄호가 제대로 짝을 이룸
}

console.log(bracketChecker("[]")); // true
console.log(bracketChecker("[][]{{()}}")); // true
console.log(bracketChecker("[][]{{(}}")); // false
console.log(bracketChecker("[][]{{(}})")); // false
