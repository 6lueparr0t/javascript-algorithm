function reverse(str) {
  let str_arr1 = str.split("");
  let str_arr2 = [];

  function helper(input) {
    if (input <= 0) return str_arr2.join("");
    str_arr2.push(input.pop());
    return helper(input);
  }

  let result = helper(str_arr1);

  return result;
}

function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}

console.log(reverse("awesome"));
console.log(reverse2("awesome"));
