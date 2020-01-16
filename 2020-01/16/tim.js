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
var isBalanced = function(root) {  
  if (!root) {
    return true;
  }
  
  let leftDepth = findDepth(root.left ? root.left : null, 0, true);
  let rightDepth = findDepth(root.right ? root.right : null, 0, true);
  
  if (leftDepth == -1 || rightDepth == -1) {
    return false;
  } else if (Math.abs(leftDepth-rightDepth) > 1) {
    return false;
  } else {
    return true;
  }
};

const findDepth = (root, depth, hasSibiling) => {
  if (!root) {
    return depth;
  } else if (hasNoChild(root)) {
    return depth + 1;
  } else {
    if (!hasSibiling) {
      return -1;
    } else if (root.left && root.right) {

      let leftDepth = findDepth(root.left, depth + 1, true);
      let rightDepth = findDepth(root.right, depth + 1, true);

      if (leftDepth == -1 || rightDepth == -1) {
        return -1;
      } else {
        if (Math.abs(leftDepth - rightDepth) > 1) {
          return -1;
        } else if (leftDepth > rightDepth) {
          return leftDepth;
        } else {
          return rightDepth;
        }
      }
    } else {
      if (root.right) {
        return findDepth(root.right, depth + 1, false);
      } else {
        return findDepth(root.left, depth + 1, false);
      }
    }
  }
}

const hasNoChild = (node) => {
  if (!node.left && !node.right) {
    return true;
  } else {
    return false;
  }
}

    
