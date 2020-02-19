// Runtime: 52 ms, faster than 93.03% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 34.8 MB, less than 82.35% of JavaScript online submissions for Binary Tree Level Order Traversal.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  let queue = [];
  let result = [];
  
  if (root) {
    queue.push(root);
    
    while (queue.length != 0) {
      let temp = [];
      let length = queue.length;
      
      for (let i = 0; i < length; i++) {
        temp.push(queue[i].val);
      }
      
      result.push(temp);
      
      for (let i = 0; i < length; i++) {
        let child = queue.shift();
        if (child.left) {
          queue.push(child.left);
        }
        if (child.right) {
          queue.push(child.right);
        }
      }
    }
  }
  
  return result;
}

var _levelOrder = function(root) {
  let ret = [];
  
  if (root === null) {
    return []
  }
  
  const arr = bfs(root);
  
  let pow = 0;
  let idx = 0;
  
  while (idx < arr.length) {    
    let temp = [];
    
    for (let i=0; i<Math.pow(2,pow); i++) {
      if (idx >= arr.length) {
        break;
      }
      
      if (arr[idx]) {
        temp.push(arr[idx]);
      }
      
      idx++;
    }
    
    if (temp.length > 0) {
      ret.push(temp);  
    }
    
    pow++;
  }
  
  return ret;
};

const bfs = (root) => {
  let ret = [];
  let arr = [];
  
  while (root !== null) {  
    console.log(ret);
    
    if (root === '') {
      ret.push(null);
    } else {
      ret.push(root.val);
    }    
    
    if (root.left != null) {
      arr.push(root.left);
    } else {
      arr.push('');
    }
    
    if (root.right != null) {
      arr.push(root.right);
    } else {
      arr.push('');
    }
    
    if (arr.length !== 0) {
      root = arr.shift();
    } else {
      root = null;
    }
  }
  return ret;
}
