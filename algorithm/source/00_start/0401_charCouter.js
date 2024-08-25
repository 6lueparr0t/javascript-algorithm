/*
문자 세기
https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
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
