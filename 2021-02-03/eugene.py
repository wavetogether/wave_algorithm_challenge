class Solution(object):
    def findMinHeightTrees(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: List[int]
        """
        if n < 2:
            return [n - 1]
        
        neighbors = [set() for _ in range(n)]
        for x, y in edges:
            neighbors[x].add(y)
            neighbors[y].add(x)
        
        leaves = [i for i, neighbor in enumerate(neighbors) if len(neighbor) == 1]
        
        while True:
            next_leaves = []
            for leaf in leaves:
                if len(neighbors[leaf]) == 0:
                    return leaves
                neighbor_node = neighbors[leaf].pop()
                neighbors[neighbor_node].remove(leaf)
                if len(neighbors[neighbor_node]) == 1:
                    next_leaves.append(neighbor_node)
            leaves = next_leaves
