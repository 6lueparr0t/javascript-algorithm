function power(num, count) {
  if (count <= 0) return 1;

  return num * power(num, count - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
