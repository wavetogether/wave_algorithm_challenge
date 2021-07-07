# Runtime: 20 ms, faster than 78.53% of Python online submissions for Symmetric Tree.
# Memory Usage: 12 MB, less than 60.87% of Python online submissions for Symmetric Tree.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """

        def checkSymmetric(left_node, right_node):
            if not left_node and not right_node:
                return True
            elif left_node and right_node and left_node.val == right_node.val:
                return checkSymmetric(left_node.left, right_node.right) and checkSymmetric(left_node.right,
                                                                                           right_node.left)
            else:
                return False

        return checkSymmetric(root, root)
