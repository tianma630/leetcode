// 将100元随机分成10个红包，每个红包在8-12元之间

function randomCoupon(yun, num) {
    const ret = [];

    function _random(yun, num) {
        if (num === 1) {
            if (yun >= 8 && yun <= 12) {
                ret.push(yun);
            }
        } else {
            let max = 12, min = 8;

            while((yun - max) / (num - 1) < 8) {
                max --;
            }

            while((yun - min) / (num - 1) > 12) {
                min ++;
            }

            let n = Math.floor(Math.random() * (max - min + 1)) + min;

            ret.push(n);

            _random(yun - n, num - 1);
        }
    }

    _random(yun, num);
    
    return ret;
}

let ret = randomCoupon(100, 10);

console.log(ret);
console.log(ret.reduce((x, y) => x + y));

