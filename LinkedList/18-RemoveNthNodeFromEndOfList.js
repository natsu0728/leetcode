/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var depth = -1;
    var find = function(node){
        if (!node) return
        depth++;
        var currentDepth = depth;
        find(node.next);
        if (depth - currentDepth === n) {
            node.next = node.next.next
        }
    }
    var result = {next:head}
    find(result);
    return result.next || null
};