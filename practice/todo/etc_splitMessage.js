/**
 * 메시지를 제한된 길이로 나누는 함수
 * ? https://leetcode.com/problems/split-message-based-on-limit/
 *
 * @param {string} s - 나눌 메시지 문자열
 * @param {number} limit - 각 부분의 최대 길이
 * @returns {string[]} 나누어진 메시지 배열
 */
function splitMessage(s, limit) {
  let cur = 0;
  let k = 0;
  let i = 0;

  // k의 값을 찾기 위한 루프
  // cur는 모든 인덱스의 총 문자열 길이
  // k는 각 부분의 인덱스 번호
  // 3은 '</>' 문자들이 차지하는 길이
  // len(str(k))는 k의 길이를 의미
  // 메시지를 필요한 만큼의 파트로 나눌 수 있는 k 값을 찾기 위해 증가시킴
  while (3 + String(k).length * 2 < limit && cur + s.length + (3 + String(k).length) * k > limit * k) {
    k += 1;
    cur += String(k).length;
  }

  let res = [];

  // k의 값을 찾은 후, 메시지를 나누어 저장
  if (3 + String(k).length * 2 < limit) {
    for (let j = 1; j <= k; j++) {
      // 각 부분의 길이를 제한에서 계산
      let l = limit - (String(j).length + 3 + String(k).length);
      // 부분 문자열을 결과 배열에 추가
      res.push(`${s.slice(i, i + l)}<${j}/${k}>`);
      i += l;
    }
  }

  return res;
}



// 테스트 케이스
console.log(splitMessage("Hello, World!", 10));
// 출력: ["Hello<1/3>", ", Wor<2/3>", "ld!<3/3>"]

console.log(splitMessage("this is really a very awesome message", 9));
// 출력: ["thi<1/14>","s i<2/14>","s r<3/14>","eal<4/14>","ly <5/14>","a v<6/14>","ery<7/14>"," aw<8/14>","eso<9/14>","me<10/14>"," m<11/14>","es<12/14>","sa<13/14>","ge<14/14>"]

console.log(splitMessage("short message", 15));
// 출력: ["short mess<1/2>","age<2/2>"]

// 테스트 케이스
console.log(splitMessage("abbababbbaaa aabaa a", 8));
// 출력: ["abb<1/7>", "aba<2/7>", "bbb<3/7>", "aaa<4/7>", " aa<5/7>", "baa<6/7>", " a<7/7>"]
