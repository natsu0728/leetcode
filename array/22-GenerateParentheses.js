/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];
    var record = [{str:'', left:n, right:0}];
    for (let i = 0; i<2*n; i++) {
        let len = record.length;
        for (let j = 0; j<len; j++){
            let item = record[j];
            if (item.left > 0 && item.right>0) {
                let copy = Object.assign({}, record[j]);
                item.str = item.str + '(';
                item.left--;
                item.right++;
                copy.str = copy.str + ')';
                copy.right--;
                record.push(copy);
            } else if (item.left > 0){
                item.str = item.str + '(';
                item.left--;
                item.right++;
            } else if (item.right > 0){
                item.str = item.str + ')';
                item.right--;
            }   
        }
    }
    return record.map(function(item){return item.str});
};