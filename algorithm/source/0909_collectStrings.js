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

function collectStrings2(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

function collectStrings3(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings3(obj[key]));
    }
  }

  return stringsArr;
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
console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])
console.log(collectStrings3(obj)); // ["foo", "bar", "baz"])
