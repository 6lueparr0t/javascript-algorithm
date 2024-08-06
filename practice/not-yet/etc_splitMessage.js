/**
 * leetcode 토론에서 아이디어를 기반으로 작성된 코드
 * https://leetcode.com/problems/split-message-based-on-limit/
 *
 * @param {string} message - 분할할 문자열
 * @param {number} limit - 각 부분의 최대 길이
 * @return {string[]} - 분할된 문자열 배열
 */
var splitMessage = function (message, limit) {
  // 숫자의 자릿수를 계산하는 함수
  function getLen(number) {
    if (Number.isNaN(number) || number < 0)
      throw new Error(`Invalid input: ${number}`);
    return number.toString().length;
  }

  const MESSAGE_LEN = message.length; // 원본 메시지의 길이
  // 접미사는 <index/total> 형식이며, index와 total은 숫자
  let splittedCount = 0; // 나누어진 메시지 부분의 총 개수
  let totalSuffixIndexPart = 0; // 접미사 인덱스 부분의 총 길이

  // 가능한 최대 부분 수를 찾기 위한 루프
  while (
    3 + 2 * getLen(splittedCount) < limit && // 접미사 길이와 현재 부분 수에 대한 길이의 합이 제한을 넘지 않아야 함
    MESSAGE_LEN +
    totalSuffixIndexPart +
    splittedCount * (3 + getLen(splittedCount)) >
    splittedCount * limit // 전체 길이가 제한을 넘지 않아야 함
  ) {
    // 아래 두 줄의 순서는 매우 중요합니다. splittedCount를 먼저 증가시켜야 함
    splittedCount++;
    totalSuffixIndexPart += getLen(splittedCount);
  }

  // 만약 계산된 부분 수로 문자열을 나눌 수 없는 경우
  if (
    MESSAGE_LEN +
    totalSuffixIndexPart +
    splittedCount * (3 + getLen(splittedCount)) >
    splittedCount * limit
  )
    return []; // 빈 배열을 반환

  let suffixTotalLen = getLen(splittedCount); // 각 부분에 붙일 접미사의 총 길이
  let ans = []; // 결과 배열
  let copyStartIndex = 0; // 현재 부분 문자열의 시작 인덱스

  // 문자열을 실제로 나누는 루프
  for (let splitIndex = 1; splitIndex <= splittedCount; splitIndex++) {
    // 현재 부분에 포함될 수 있는 문자 수 계산
    let chars = limit - 3 - suffixTotalLen - getLen(splitIndex);
    // 부분 문자열의 끝 인덱스 계산
    let copyEndIdx = Math.min(copyStartIndex + chars, MESSAGE_LEN);
    // 부분 문자열과 접미사를 조합하여 결과 배열에 추가
    ans.push(
      `${message.substring(
        copyStartIndex,
        copyEndIdx
      )}<${splitIndex}/${splittedCount}>`
    );
    // 마지막 부분까지 복사한 경우, 결과 배열 반환
    if (copyEndIdx === MESSAGE_LEN) return ans;

    // 다음 부분 문자열의 시작 인덱스 업데이트
    copyStartIndex = copyEndIdx;
  }

  return ans; // 최종 결과 배열 반환
};


// 테스트 케이스
console.log(splitMessage("this is really a very awesome message", 9));
// 출력: ["thi<1/14>","s i<2/14>","s r<3/14>","eal<4/14>","ly <5/14>","a v<6/14>","ery<7/14>"," aw<8/14>","eso<9/14>","me<10/14>"," m<11/14>","es<12/14>","sa<13/14>","ge<14/14>"]

console.log(splitMessage("short message", 15));
// 출력: ["short mess<1/2>","age<2/2>"]

// 테스트 케이스
console.log(splitMessage("abbababbbaaa aabaa a", 8));
// 출력: ["abb<1/7>", "aba<2/7>", "bbb<3/7>", "aaa<4/7>", " aa<5/7>", "baa<6/7>", " a<7/7>"]
