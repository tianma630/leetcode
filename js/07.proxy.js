let obj = {
    log: function() {
        console.log(this);
    }
};

var proxy = new Proxy(obj, {
    get: function (target, propKey) {
        // console.log(target, propKey)
        return target[propKey];
    }
});

proxy.log()

// console.log(proxy.log());

// var proxy1 = new Proxy([1, 2, 3], {
//     get(target, propKey) {
//         console.log(target, propKey)
//         return target[parseInt(propKey)];
//     },
//     set: function (target, propKey, value) {
//         console.log(target, propKey)
//         target[parseInt(propKey)] = value;
//     }
// });

// proxy1[2] = 4;
// console.log(proxy1[2])