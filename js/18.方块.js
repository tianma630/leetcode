let arr = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
  [5, 1]
];

function calArrSum(arr = [], callback = x => x) {
  arr.slice(0, arr.length - 1).reduce((x, y) => {
    return callback(x + y);
  });
}

function minCross(arr = []) {
  let sumCache = {};

  const callback = sum => {
    if (sumCache[sum]) {
      sumCache[sum] += 1;
    } else {
      sumCache[sum] = 1;
    }
    return sum;
  }

  arr.forEach(e => {
    calArrSum(e, callback);
  });

  return arr.length - Math.max(...Object.values(sumCache));
}

console.log(minCross(arr))
