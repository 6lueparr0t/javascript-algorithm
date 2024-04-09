/*
문자 세기
*/
const charCounter = (str) => {
  const result = {};
  for (let c of str) {
    c = c.toLowerCase();
    let check = c.charCodeAt(0);
    if ((check > 47 && check < 58) || (check > 96 && check < 123)) {
      result[c] = ++result[c] || 1;
    }
  }

  return result;
};

console.table(charCounter("Hello, World!"));
