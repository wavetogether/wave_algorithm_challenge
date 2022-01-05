// Runtime: 232 ms, faster than 100.00% of TypeScript online submissions for Minimum Height Trees.
// Memory Usage: 48.3 MB, less than 100.00% of TypeScript online submissions for Minimum Height Trees.

function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const ret = [];

  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0,1];
  }

  const edgeMap = {};

  for (let i=0; i<n; i++) {
    edgeMap[i] = [];
  }

  for (let edge of edges) {
    edgeMap[edge[0]].push(edge[1]);
    edgeMap[edge[1]].push(edge[0]);
  }

  let remainingTree = Object.keys(edgeMap).map(keyString=>Number(keyString));

  while (remainingTree.length > 2) {
    const nodesToDelete = [];

    for (let i = 0; i < remainingTree.length; i++) {
      if (edgeMap[remainingTree[i]].length === 1) {
        nodesToDelete.push(remainingTree[i])
      }
    }

    for (let i = 0; i < nodesToDelete.length; i++) {
      const key = nodesToDelete[i]
      const value = edgeMap[key][0];

      edgeMap[key] = [];
      edgeMap[value].splice(edgeMap[value].indexOf(key), 1);

      remainingTree.splice(remainingTree.indexOf(key), 1);
    }
  }

  return remainingTree;
}
