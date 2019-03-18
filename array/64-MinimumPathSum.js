/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid.length) return 0;
    var result = [];
    var m = grid.length;
    var n = grid[0].length;
    for (let i = 0; i<m; i++) {
        if (!result[i]) result.push([]);
        for (let j = 0; j< n; j++){
            if (i===0){
                result[i][j] = (result[i][j-1] || 0) + grid[i][j]
            } else if (j===0){
                result[i][j] = (result[i-1][j] || 0) + grid[i][j]       
            } else {
                result[i][j] = Math.min(result[i-1][j], result[i][j-1]) + grid[i][j]
            }
        }
    }
    return result[m-1][n-1]
};