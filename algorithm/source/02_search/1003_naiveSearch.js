function naiveSearch(long, short) {
  let count = 0;
  console.log('long.length:', long.length);
  console.log('short.length:', short.length);
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) {
        count++; // if j is the last index of short, increase count
      }
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol')); // 1
console.log(naiveSearch('Hello, World!', 'l')); // 3