/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (!intervals.length) return [];
    intervals.sort((first, second) => {
        if (first.start !== second.start) {
            return first.start - second.start;
        }
        return first.end - second.end;
    });
    var start = intervals[0].start;
    var end = intervals[0].end;
    var result = [];
    for (let i = 1; i<intervals.length; i++) {
        let inter = intervals[i];
        if (inter.start<= end){
            inter.end > end && (end = inter.end) 
        } else {
            result.push(new Interval(start, end));
            start = inter.start;
            end = inter.end;
        }
    }
    result.push(new Interval(start, end))
    return result
};