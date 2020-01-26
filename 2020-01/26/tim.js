/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return runDFS(root, 0);  
};

const runDFS = (node, depth) => {
  if (!node) {
    return depth;
  } else {
    const left = runDFS(node.left, depth+1);
    const right = runDFS(node.right, depth+1);
    return left>right?left:right;
  }
}
