function pivot(arr, start = 0, end = arr.length) {
  const swap = (array, start, target) => {
    [array[target], array[start]] = [array[start], array[target]];
  };

  // 무작위 피벗 선택
  // const randomIndex = Math.floor(Math.random() * (end - start)) + start;
  // swap(arr, start, randomIndex);

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// 예상 출력: [1, 2, 3, 4, 5, 6, 7, 8]
