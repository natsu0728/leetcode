/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0;
    function calculateArea(i,j){
        if (!grid[i] || !grid[i][j] || grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        return calculateArea(i+1, j) + calculateArea(i-1, j) + calculateArea(i, j-1) + calculateArea(i, j+1) + 1
    }
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++){
            maxArea = Math.max(maxArea, calculateArea(i,j));
        }
    }
    return maxArea;
};

var arr =  [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(maxAreaOfIsland(arr));