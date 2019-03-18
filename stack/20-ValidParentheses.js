/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for(let i = 0; i<s.length; i++){
        let currentChar = s.charAt(i);
        if (!arr.length) {
            arr.push(currentChar)
            continue;
        }
        let lastChar = arr[arr.length-1];
        if (['()','[]','{}'].indexOf(lastChar + currentChar) === -1) {
            arr.push(currentChar);
        } else {
            arr.pop();
        }
    }
    return arr.length === 0
};