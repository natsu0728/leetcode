/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var map = Object.create(null);
    tasks.forEach(function(item){
        map[item] !== undefined ? map[item]++ :map[item] = 1;
    })
    var max = 0;
    var tail = 0;
    Object.keys(map).forEach(function(item){
      if (map[item] === max){
          tail++
      } else if (map[item] > max) {
          max = map[item];
          tail = 1;
      }
    })
    return Math.max(tasks.length, (max-1) * (n+1) + tail)
};