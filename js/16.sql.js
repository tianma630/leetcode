const arrayProtoCopy = Object.create(Array.prototype);

arrayProtoCopy.where = function (con = {}) {
  find.data = find.data.filter(item => {
    let match = true;
    for (let k in con) {
      if (!con[k].test(item[k])) {
        match = false;
        break;
      }
    }
    return match;
  });

  find.data.__proto__ = arrayProtoCopy;
  return find.data;
};

arrayProtoCopy.orderBy = function (k, t = 'asc') {
  find.data.sort((a, b) => t === 'asc' ? a[k] - b[k] : b[k] - a[k]);
  return find.data;
};

function find(data) {
  find.data = data;
  find.data.__proto__ = arrayProtoCopy;
  return data;
}

var data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
];

var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result)
