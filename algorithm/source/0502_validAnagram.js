/*
문제 해결 패턴 - 빈도수 세기 패턴 : 애나그램
*/
function validAnagram(first, second) {
    if(first.length !== second.length) return false;

    const lookup = {};

    for (let i = 0; i< first.length; i++) {
        let letter = first[i];
        lookup[letter] = (++lookup[letter] || 1);
    }

    // console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));