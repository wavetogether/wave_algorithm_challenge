# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def cal_depth(self, node):
        if node is None:
            return 0
        
        return max(self.cal_depth(node.left), self.cal_depth(node.right)) + 1
    
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.cal_depth(root)
