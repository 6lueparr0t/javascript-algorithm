function capitalizeWords(arr) {
  if (arr.length <= 1) {
    return [arr[0].toUpperCase()];
  }
  const result = capitalizeWords(arr.slice(0, -1));
  result.push(arr[arr.length - 1].toUpperCase());

  return result;
}

console.log(capitalizeWords(["am", "learning", "recursion"])); // ['AM', 'LEARNING', 'RECURSION']
