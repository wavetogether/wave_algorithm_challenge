class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        def traverse(node, l):
            if node is None:
                return
            traverse(node.left, l)
            l.append(node.val)
            traverse(node.right, l)
        result = []
        traverse(root, result)
        return result
