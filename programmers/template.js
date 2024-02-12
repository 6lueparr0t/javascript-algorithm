/**
 * 프로그래머스 - Javascript Template
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
// input, Ctrl+D 를 눌러 입력 종료
rl.on('line', function (line) {
    input = [line];
// output, console.log 로 출력
}).on('close',function(){
    str = input[0];
    
    let result = [];
    for(let x of str) {
        if(x === x.toUpperCase()) {
            result.push(x.toLowerCase());
        } else {
            result.push(x.toUpperCase());
        }
    }
    
    console.log(result.join(''));
});

/**
 * function (old)
 */

function solution(slice, n) {
  var pizza = 0;
  var count = n;
  while(count > 0) {
      if(count > 0) {
          pizza++;
          count -= slice;
      }
  }
  return pizza;
}