# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isValidBST(self, root, maximum=float('inf'), minimum=float('-inf')):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return not root or (minimum < root.val < maximum and self.isValidBST(root.left, min(maximum, root.val), minimum) and self.isValidBST(root.right, maximum, max(minimum, root.val)))
