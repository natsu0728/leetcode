/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if (grid[i][j] === "1") {
                result++;
                clearIsland(i,j);
            }
        }
    }
    function clearIsland(i, j){
        let m = [{x:i-1, y:j},{x:i, y:j-1}, {x:i, y:j+1}, {x:i+1, y:j}];
        m.forEach(function(item){
            if(grid[item.x] && grid[item.x][item.y] === "1"){
                grid[item.x][item.y]= "0";
                clearIsland(item.x, item.y)
            }
        })
    }
    return result
};