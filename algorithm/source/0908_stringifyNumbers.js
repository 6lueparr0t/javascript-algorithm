function stringifyNumbers(target) {
  if (typeof target === "number") {
    return target.toString();
  } else if (typeof target === "object" && !Array.isArray(target)) {
    const obj = {};
    for (let key of Object.keys(target)) {
      obj[key] = stringifyNumbers(target[key]);
    }
    return obj;
  }

  return target;
}

function stringifyNumbers2(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.dir(stringifyNumbers(obj), { depth: null });
console.dir(stringifyNumbers2(obj), { depth: null });

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
