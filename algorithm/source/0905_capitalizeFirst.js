function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }

  const res = [arr[0][0].toUpperCase() + arr[0].substr(1)];
  res.push(...capitalizeFirst(arr.splice(1)));

  return res;
}

function capitalizeFirst2(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }

  const res = capitalizeFirst(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1));

  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirst2(["car", "taco", "banana"])); // ['Car','Taco','Banana']
