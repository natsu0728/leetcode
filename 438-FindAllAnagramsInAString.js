/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 思路：slide Window
var findAnagrams = function(s, p) {
    let result = [];
    let map = Object.create(null)
    for(let i = 0;i<p.length; i++){
        let tempChar = p.charAt(i)
        map[tempChar] ? map[tempChar]++ : (map[tempChar] = 1)
    }
    let temp = JSON.parse(JSON.stringify(map))
    let windowPointer = 0;
    let count = p.length;
    for(let i = 0; i<s.length; i++){
        let tempChar = s.charAt(i)
           if (!map[tempChar]){
               temp = JSON.parse(JSON.stringify(map))
               windowPointer = i+1
               count = p.length
               continue
           }
            temp[tempChar]--;
            count --
            while (temp[tempChar] < 0){
                let c = s.charAt(windowPointer++)
                temp[c]++
                count++
            }
        if (count === 0){
            result.push(i - p.length + 1)
            let c = s.charAt(windowPointer++)
            temp[c] = 1
            count++
        }
    }
    return result
};