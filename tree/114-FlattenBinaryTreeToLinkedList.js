/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let pointer = null;
    function loop(node){
        if (!node) return
        if (pointer) {
            pointer.right = node
        }
        pointer = node;
        pointer.right_ = pointer.right;
        loop(node.left);
        loop(node.right_);
        node.left = null;
        node.right_ = null;
    }
    loop(root);
};