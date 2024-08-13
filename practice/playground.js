// let arr = Array.apply(null, {length:1000}).map(Function.call, Math.random));
// console.log(arr);

console.log(Array.from({length: 10}, ()=>Math.floor(Math.random()*44+1)));
