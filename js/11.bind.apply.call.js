Function.prototype.myApply = function(obj, args) {
    let s = Symbol();
    obj[s] = this;
    let ret = obj[s](...args);
    delete obj[s];
    return ret;
}

Function.prototype.myBind = function(obj, ...args) {
    let _this = this;
    return function() {
        let ret = _this.myApply(obj, args);
        return ret;
    }
}

function add(a, b) {
    return a + b + this.c;
}

let _add = add.myBind({c: 4}, 2, 2);
console.log(_add());