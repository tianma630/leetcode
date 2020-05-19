function P(name, age) {
    this.name = name;
    this.age = age;
}

function mynew(fn, ...args) {
    const obj = Object.create(fn.prototype);

    const res = fn.apply(obj, args);

    console.log(res)

    return obj;

}

const p = mynew(P, 'wj', 11);

console.log(p.__proto__);

console.log(new P('wj', 11).__proto__)