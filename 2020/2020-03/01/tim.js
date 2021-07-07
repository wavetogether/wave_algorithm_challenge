/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(root === null) {
    return [];
  }
  
  let stack = [];
  let res = [];
  
  while(true){
      if(root) {
        stack.push(root);
        root = root.left;
      } else{
        let temp = stack.pop();
        
        res.push(temp.val)
        root = temp.right;
        
        if(root == null && stack.length == 0) {
          break;
        }
      }
  }
  
  return res;
};
