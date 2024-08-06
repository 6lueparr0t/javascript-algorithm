// 양말 짝 찾기 문제
function sockMerchant(n, ar) {
  // Write your code here
  const socks = {};
  for (let i = 0; i < n; i++) {
    socks[ar[i]] = (socks[ar[i]] || 0) + 1;
  }

  let result = 0;
  for (let key in socks) {
    if (socks[key] >= 2) {
      result += Math.floor(socks[key] / 2);
    }
  }

  return result;
}

console.log(sockMerchant(9, [1, 2, 2, 1, 1, 3, 5, 1, 2]));
