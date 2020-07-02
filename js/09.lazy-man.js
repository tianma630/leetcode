function LazyMan(name) {
    this.name = name;

    let queue = [], flag = false;
    
    this.eat = function(d) {
        queue.push(['eat', d]);
        nextTick();
        return this;
    }

    this.sleep = function(s) {
        queue.push(['sleep', s]);
        nextTick();
        return this;
    }

    this.sleepFirst = function(s) {
        queue.unshift(['sleep', s]);
        nextTick();
        return this;
    }

    function nextTick() {
        if (!flag) {
            flag = true;
            setTimeout(() => {
                run();
            });
        }
    }

    function reset() {
        queue = [];
        flag = false;
    }

    function run() {
        eatQueue(queue);
    }

    function eatQueue(queue = []) {
        if (queue.length === 0) {
            reset();
            return;
        }
        for (let i = 0; i < queue.length; i++) {
            let [type, m] = queue[i];
            if (type === 'eat') {
                console.log(name + ' eat ' + m);
            } else {
                sleepQueue(queue.slice(i));
                break;
            }
        }
    }

    function sleepQueue(queue = []) {
        let [, s] = queue[0];
        console.log(name + ' sleep ' + s + '秒')
        setTimeout(() => {
            eatQueue(queue.slice(1));
        }, s * 1000);
    }
}

new LazyMan('wj').eat('dinner').sleep(2).eat('lunch').sleepFirst(3);