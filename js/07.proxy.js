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


// function option(a) {

//     let isNull = false

//     function p(a) {
//         var proxy = new Proxy(a, {
//             get(target, key) {
//                 if (target === null) {
//                     return p(null);
//                 }
//                 const v = target[key];
//                 if (typeof v == 'object') {
//                     return p(target[key]);
//                 } else if (typeof v == 'undefined') {
//                     isNull = true;

//                 } else {
//                     return v;
//                 }
//             }
//         });

//         return proxy;
//     }

//     return p(a); 
    
// }

let data = {
    a: {
        b: {
            c: 111
        }
    }
}

// console.log(option(data).b.c)

Object.keys(data).forEach(key => {
    let v = data[key];
    Object.defineProperty(data, key, {
        get() {
            console.log('key', key)
            return v;
        },
        set(value) {
            data[key] = value;
        }
    })
})

console.log(data.c)