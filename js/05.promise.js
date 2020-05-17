const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {

    onFulfilledCallbacks = [];
    onRejectedCallbacks = [];
    data = null;
    error = null;
    status = PENDING;

    resolve = d => {
        if (this.status === PENDING) {
            setTimeout(() => {
                this.status = FULFILLED;
                this.data = d;
                this.onFulfilledCallbacks.forEach(cb => cb(this.data));
            });
        }
    }

    reject = e => {
        if (this.status === PENDING) {
            setTimeout(() => {
                this.status = REJECTED;
                this.error = e;
                this.onRejectedCallbacks.forEach(cb => cb(this.error));
            });
        }
    }

    then = cb => {
        if (this.status === PENDING) {
            let newPromise = new MyPromise((resolve, reject) => {
                this.onFulfilledCallbacks.push(d => {
                    let x = cb(d);
                    if (x instanceof MyPromise) {
                        x.then(d => {
                            resolve(d);
                        })
                    } else {
                        resolve(x);
                    }
                })

            });

            return newPromise;
        } else if (this.status === FULFILLED) {
        }
        return this;
    }

    catch = cb => {
        if (this.status === PENDING) {
            this.onRejectedCallbacks.push(cb);
        } else if (this.status === REJECTED) {
            cb(this.error);
        }
    }

    constructor(exec) {
        exec(this.resolve, this.reject);
    }
}

new MyPromise(function(reslove, reject) {
    setTimeout(() => {
        reslove('abc')
    }, 1000);
}).then(d => {
    console.log('success', d);
    return new MyPromise(function(resolve, reject) {
        setTimeout(() => {
            resolve('efg');
        }, 1000);
    });
}).then(d => {
    console.log('success', d);
}).catch(e => {
    console.log('error', e);
});