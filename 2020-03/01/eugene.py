# Runtime: 12 ms, faster than 93.86% of Python online submissions for Binary Tree Inorder Traversal.
# Memory Usage: 11.8 MB, less than 26.25% of Python online submissions for Binary Tree Inorder Traversal.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        if root:
            result += self.inorderTraversal(root.left)
            result.append(root.val)
            result += self.inorderTraversal(root.right)
        return result
