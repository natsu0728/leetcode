/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var currentLen = 0;
    var maxLen = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 1){
            currentLen++
        } else {
            currentLen !== 0 && (maxLen = Math.max(maxLen, currentLen));
            currentLen = 0;
        }
    }
    return Math.max(maxLen, currentLen);
};

console.log(findMaxConsecutiveOnes([0]));