function deepClone(val) {
  if (["number", "string", "boolean"].includes(typeof val)) {
    return val;
  } else {
    // object, array
    if (Array.isArray(val)) {
      return val.map((item) => deepClone(item));
    } else {
      const copy = {};
      for (let k in val) {
        copy[k] = deepClone(val[k]);
      }

      return copy;
    }
  }
}

// number clone
let test1 = 10;
let test2 = deepClone(test1);

console.log(test1);
test1 = 20;
console.log(test2);

// string clone
let test_str1 = "hello World";
let test_str2 = deepClone(test_str1);

console.log(test_str1);
test_str1 = "hello World2";
console.log(test_str2);

// array clone
let test_arr1 = [1, 2, 3, 4];
let test_arr2 = deepClone(test_arr1);

console.log(test_arr1);
test_arr1 = [5, 6, 7, 8];
console.log(test_arr2);

// object clone
let test_obj1 = { key: { a: 1 } };
let test_obj2 = deepClone(test_obj1);

console.dir(test_obj1, { depth: null });
test_obj1.key.a = 2;
console.dir(test_obj2, { depth: null });

// object clone2
let test_obj_ext1 = { key: { a: { b: { c: [1, 2, 3] } } } };
let test_obj_ext2 = deepClone(test_obj_ext1);

console.dir(test_obj_ext1.key, { depth: null });
test_obj_ext1.key.a.b.c.push(4);
console.dir(test_obj_ext2.key, { depth: null });
