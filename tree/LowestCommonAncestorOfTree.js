/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var result;
    p = p.val;
    q = q.val;
    var checkEqual = function(a, b){
        return a === p && b === q || a===q && b===p
    }
    var hasTarget = function(node){
        if (!node || result!==undefined) return false
        var leftHasTarget = hasTarget(node.left);
        var rightHasTarget = hasTarget(node.right);
        if (checkEqual(leftHasTarget, rightHasTarget) 
            || checkEqual(leftHasTarget, node.val)
            || checkEqual(rightHasTarget, node.val)) {
            result = node;
            return true
        }
        if (leftHasTarget !== false) return leftHasTarget
        if (rightHasTarget !== false) return rightHasTarget
        if (node.val === p || node.val === q) return node.val
        return false
    }
    hasTarget(root)
    return result
};