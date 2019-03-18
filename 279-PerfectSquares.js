/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr = [];
    for (let i = 0; i<= n; i++) {
        if (i < 4) {
            arr[i] = i;
            continue;
        }
        let maxN = Math.floor(Math.pow(i, 0.5));
        let current = i;
        for (let j = 1; j <= maxN; j++) {
            current = Math.min(current, arr[i - j*j])
        }
        arr[i] = current + 1
    }
    return arr[n]
};