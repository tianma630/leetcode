// add(5)(6)();


const add = (function () {
    let expr = '0';
    return function add (...args) {
        if (args.length >= 1) {
            args.forEach(arg => {
                expr += '+' + arg;
            });
            return add;
        } else {
            return eval(expr);
        }
    }
})();

console.log(add(6, 1)(7)())