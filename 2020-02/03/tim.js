// Runtime: 64 ms, faster than 79.07% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 37.6 MB, less than 46.15% of JavaScript online submissions for Validate Binary Search Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
  if (root === null) {
    return true;
  }
  return validateNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

const validateNode = (node, max, min) => {
  if (node === null) {
    return true;  
  } else {
    if (max !== Number.MIN_SAFE_INTEGER && min !== Number.MAX_SAFE_INTEGER) {
      if (node.val >= max || node.val <= min) {
        return false;
      }  
    }    
    if (!node.left && !node.right) {
      return true;
    } else if (!node.right) {
      if (node.val <= node.left.val) {
        return false;
      }
      return validateNode(node.left, (max > node.val)? max : node.val, min);
    } else if (!node.left) {
      if (node.val >= node.right.val) {
        return false;
      }
      return validateNode(node.right, max, (min < node.val)? min : node.val);
    } else{
      if (node.val <= node.left.val || node.val >= node.right.val) {
          return false;
      }
      return validateNode(node.left, (max > node.val)? max : node.val, min) &&
        validateNode(node.right, max, (min < node.val)? min : node.val);
    }
  }
}
