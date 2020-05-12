function debounce(fn,  timeout) {
    let t;

    return function() {
        if (t) {
            clearTimeout(t);
            t = null;
        }

        t = setTimeout(() => {
            fn.apply(this, arguments);
        }, timeout);
    }
}

const d = debounce(() => {console.log('debounce')}, 2000);

d();

setTimeout(() => {
    d();
}, 1000);

function throttle(fn, timeout) {
    let t;

    return function() {
        if (!t) {
            t = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(t);
                t = null;
            }, timeout);
        } 
    }
}

const t = throttle(() => {console.log('throttle')}, 2000);

t();

setTimeout(() => {
    t();
}, 1000);


