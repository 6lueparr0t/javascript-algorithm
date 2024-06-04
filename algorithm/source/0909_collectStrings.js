function collectStrings(target) {
  if (typeof target === "string") {
    return target;
  } else if (typeof target === "object" && !Array.isArray(target)) {
    let arr = [];
    for (let key in target) {
      arr = arr.concat(collectStrings(target[key]));
    }

    return arr;
  }
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
