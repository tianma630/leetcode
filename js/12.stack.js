function Stack() {
    let list = [];
    let index = -1;

    this.getCurrent = function() {
        return list[index];
    }

    this.push = function(item) {
        list.push(item);
        index ++;
    }

    this.pop = function() {
        if(index > -1) {
            index --;
            return list.pop();
        }
    }
}

let str = '<a><a></a><b></b><c></c></a>'

function match(str) {
    let arr = str.substr(1, str.length - 2).split('><');

    let s = new Stack();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('/') === 0) {
            if (arr[i] === '/' + s.getCurrent()) {
                s.pop();
            } else {
                return false;
            }
        } else {
            s.push(arr[i]);
        }
        
    }

    return !s.getCurrent()
}

console.log(match(str))