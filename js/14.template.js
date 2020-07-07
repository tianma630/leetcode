var data = {
    name: 'wj',
    age: 111,
}

let tql = '我叫{{ name }}, 今年{{ age }}岁';

function render(tql, data) {
    return tql.replace(/{{([^{{}}]+)}}/g, (r, $1) => {
        return data[$1.trim()];
    })
}

console.log(render(tql, data));