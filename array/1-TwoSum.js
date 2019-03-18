/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = Object.create(null);
    for(let i = 0; i<nums.length; i++){
        let item = target - nums[i];
        if (map[item] !== undefined) {
            return [map[item], i]
        }
        map[nums[i]] = i
    }
    return []
};