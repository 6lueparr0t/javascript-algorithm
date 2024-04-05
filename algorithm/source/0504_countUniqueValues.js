/*
문제 해결 패턴 - 다중 포인트 패턴 : 고유 값 세기
*/

function countUniqueValues(arr) {
    let counter = 0;
    let holder = 0;
    let checker = 0;

    while(checker < arr.length) {
        checker++;
        if(arr[holder] !== arr[checker] ) {
            counter++;
            holder++;
        } else if (arr[holder] === arr[checker]) {
            holder++;
        }
    }

    return counter;
}

console.log(countUniqueValues([1,2,2,5,7,7,99])); // 5