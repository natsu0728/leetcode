/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let exchange = function(a,b){
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }  
    let left = 0; let right = nums.length - 1;
    for (let i = 0; i<=right; i++) {
        let number = nums[i];
        if (number === 0) {
            exchange(i, left);
            left++;
        }
        if (number === 2) {
            exchange(i, right);
            right--;
            i--;
        }
    }
  };