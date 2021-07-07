# 16 ms, faster than 95.57% of Python online submissions for Binary Tree Level Order Traversal.
# Memory Usage: 12.5 MB, less than 16.18% of Python online submissions for Binary Tree Level Order Traversal.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        res = []
        self.dfs(root, 0, res)
        return res

    def dfs(self, node, height, res):
        if node is None:
            return

        if len(res) <= height:
            res.append([])

        res[height].append(node.val)
        self.dfs(node.left, height + 1, res)
        self.dfs(node.right, height + 1, res)
