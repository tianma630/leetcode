/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const sLen = s.length;

    if (sLen <= 1) {
        return s;
    }

    const huiwens = [];
    let ret = s[0];

    for (let i = 0; i < sLen; i++) {
        if (i + 1 < sLen && s[i] === s[i + 1]) {
            huiwens.push([i, i + 1]);
        }

        if (i + 2 < sLen && s[i] === s[i + 2]) {
            huiwens.push([i, i + 1, i + 2]);
        }
    }

    for (let i = 0; i < huiwens.length; i++) {
        let start = huiwens[i][0];
        let end = huiwens[i][huiwens[i].length - 1];

        
        while (s[--start] === s[++end]) {
            huiwens[i].unshift(s[start]);
            huiwens[i].push(s[end]);
        }

        if (ret.length < huiwens[i].length) {
            ret = huiwens[i].reduce((a, b) => a + s[b], '')
        }
    }

    return ret;
};

console.log(longestPalindrome1('babad'));