/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    for (let i = 0; i<candidates.length; i++) {
        if (candidates[i] === target) result.push([candidates[i]])
        if (target < candidates[i]){
            continue;
        }
        let tempResult = combinationSum(candidates.slice(i), target - candidates[i]);
        tempResult.forEach(function(item){
            item.unshift(candidates[i]);
        })
        result = result.concat(tempResult)
    }
    return result;
};