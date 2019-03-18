/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    var treeNode = {
        val:preorder[0],
        left:null,
        right:null
    }
    var getChildren = function(node, startIndex, endIndex){
        let parentInPre = preorder.indexOf(node.val);
        let leftCandidate = preorder[parentInPre + 1];
        if (leftCandidate === undefined) return
        let parentIndex = inorder.indexOf(node.val);
        let leftInOrder = inorder.indexOf(leftCandidate);
        if ( leftInOrder > startIndex && leftInOrder < parentIndex){
            node.left = {
                val:leftCandidate,
                left:null,
                right:null
            }
            getChildren(node.left, startIndex, parentIndex);
            
        }
        let rightCandidate = preorder[parentInPre + parentIndex - startIndex];
        if (!rightCandidate) return
        let rightInOrder = inorder.indexOf(rightCandidate);
        if (rightInOrder < endIndex &&  rightInOrder > parentIndex) {
            node.right = {
                val:rightCandidate,
                left:null,
                right:null
            }
            getChildren(node.right, parentIndex, endIndex);
        }
    }
    getChildren(treeNode, -1, inorder.length);
    return treeNode;
};