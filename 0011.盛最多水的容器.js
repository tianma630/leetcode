/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0;
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        if (area > max) {
            max = area;
        }

        if (height[left] < height[right]) {
            const lastLeft = height[left];
            left++;
            while(height[left] <= lastLeft && left < right) {
                left++;
            }
        } else {
            const lastRight = height[right];
            right--;
            while(lastRight >= height[right] && left < right) {
                right--;
            }
        }
    }

    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))