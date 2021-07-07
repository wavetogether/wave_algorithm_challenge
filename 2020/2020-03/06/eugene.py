# Runtime: 116 ms, faster than 70.54% of Python online submissions for Serialize and Deserialize Binary Tree.
# Memory Usage: 21.9 MB, less than 80.77% of Python online submissions for Serialize and Deserialize Binary Tree.

# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """

        def iterator(node, arr):
            if node:
                arr.append(str(node.val))
                iterator(node.left, arr)
                iterator(node.right, arr)
            else:
                arr.append('null')

        result = []
        iterator(root, result)
        return ' '.join(result)

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """

        def iterator(it):
            val = next(it)
            if val != 'null':
                head = TreeNode(int(val))
                head.left = iterator(it)
                head.right = iterator(it)
                return head
            return None

        return iterator(iter(data.split(' ')))

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
