/*
문제 해결 패턴 - 빈도수 세기 패턴 : 오른쪽 배열이 제곱인지 확인해보기
*/
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
    }

    for(let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    }

    let sw = true;
    for(let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    return true;
}

console.log(same([1,2,3], [9,4,1]));