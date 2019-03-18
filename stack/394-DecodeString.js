/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var arr = ['']
    var repeatTimes = '';
    var repeatArr = ['1'];
    for (let i = 0; i<s.length; i++){
        let char = s.charAt(i);
        if (/\d/.test(char)){
            repeatTimes += char
            continue;
        }
        if (char === '['){
            arr.push('');
            repeatArr.push(repeatTimes);
            repeatTimes = '';
            continue;
        }
        if (char === ']'){
            let str = arr.pop();
            let repeat = repeatArr.pop();
            for (let j = 0; j< parseInt(repeat); j++){
                arr[arr.length-1] += str;
            }
            continue
        }
        arr[arr.length-1]+=char;
    }
    return arr[0]
};