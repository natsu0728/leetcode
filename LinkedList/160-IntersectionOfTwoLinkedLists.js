/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    var a=headA,
        b=headB,
        lenA=0,
        lenB=0;
    while(a){
        lenA++
        a = a.next
    }
    while(b){
        lenB++
        b = b.next
    }
    while(lenA > lenB){
        headA = headA.next
        lenA-- 
    }
    while(lenB > lenA){
        headB = headB.next
        lenB-- 
    }
    while(headA && headB){
        if (headA === headB) return headA
        headA = headA.next
        headB = headB.next
    }
    return null
};