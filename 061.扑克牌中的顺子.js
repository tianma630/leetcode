/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    const exceptZero = nums.filter(item => item > 0);
    return new Set(exceptZero).size === exceptZero.length && Math.max(...exceptZero) - Math.min(...exceptZero) <= 4;
};

console.log(isStraight([0,0,1,2,5]))