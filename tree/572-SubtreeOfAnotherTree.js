/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s || !t) return s === t
    return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

function isSameTree(s, t){
    if (!s || !t) return s === t
    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right,t.right)
}