const str = 'AABBCC';

function leichen(n) {
  let i = 1;
  let ret = 1;
  while(i++ < n) {
    ret *= i;
  }
  return ret;
}

function maxPermate(str) {
  let ret = 0;
  const arr = str.split('');
  const cacheLetter = {};
  for (let i = 0; i < arr.length; i++) {
    if (cacheLetter[arr[i]]) {
      cacheLetter[arr[i]] += 1;
    } else {
      cacheLetter[arr[i]] = 1;
    }
  }

  ret = leichen(arr.length);

  Object.values(cacheLetter).forEach(n => {
    ret /= leichen(n);
  });

  return ret;
}

console.log(maxPermate(str))
