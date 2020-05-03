// 消耗时间
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
};

// 消耗空间
var twoSum1 = function(nums, target) {
    let numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        const leftVal = numMap[target - val];
        if (leftVal !== undefined) {
            return [leftVal, i]
        } else {
            numMap[nums[i]] = i;
        }
    }
};

console.log(twoSum1([2, 7, 11, 15], 9));