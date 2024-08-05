function countingValleys(steps, path) {
  // Write your code here
  let depth = 0;
  let count = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      depth++;
    } else {
      depth--;
    }

    if (depth === 0 && path[i] === 'U') {
      count++;
    }
  }

  return count;
}

console.log(countingValleys(8, 'UDDDUDUU')); // 1