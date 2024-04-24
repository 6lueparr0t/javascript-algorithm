/**
 * 재귀 함수를 만드는 방법
 * 1. Base Case, 재귀가 멈추는 시점을 먼저 생각한다.
 * 2. Different Input, 매번 다른 데이터를 가지고 함수를 호출하게 만든다.
 */

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// function countDown(num) {
//     for(let i = num; i > 0; i--) {
//         console.log(i);
//     }

//     console.log("All done!");
// }

console.log(countDown(5));
