/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; let right = height.length - 1;
    let result = 0;
    while(left < right){
         let currentResult = (right - left) * Math.min(height[left], height[right]);
         if (height[right] > height[left]) {
             currentResult = (right - left) * height[left];
             left++;
         } else {
             currentResult = (right - left) * height[right];
             right--;
         }
        result = Math.max(result, currentResult);
    }
    return result
};