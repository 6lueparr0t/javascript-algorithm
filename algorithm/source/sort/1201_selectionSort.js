// 아주 작은 데이터에서는 효과적으로 동작하지만, 데이터가 많아질수록 비효율적인 알고리즘
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));