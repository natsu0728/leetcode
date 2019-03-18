/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 || n===0) return 0
    var result = [];
    var w = 0;
    var h = 0;
    while(w < m){
        !result[w] && result.push([])
        while(h < n){
            if (w <= 0 || h<=0){
                result[w][h] = 1
            } else {
                result[w][h] = result[w-1][h] + result[w][h-1]
            }  
        h++
        }
        h=0;
        w++
    }
    return result[m-1][n-1]
};