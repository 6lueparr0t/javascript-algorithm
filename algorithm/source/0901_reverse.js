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

console.log(reverse("awesome"));
