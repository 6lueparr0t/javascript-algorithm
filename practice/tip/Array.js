const length = 5;
let array = new Array(length).fill(0);
console.log(array); // [0, 0, 0, 0, 0]

array = Array.from({ length }, () => 0);
console.log(array); // [0, 0, 0, 0, 0]

array = [...Array(length)].map(() => 0);
console.log(array); // [0, 0, 0, 0, 0]
