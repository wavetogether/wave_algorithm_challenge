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
