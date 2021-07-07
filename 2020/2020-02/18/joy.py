class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []
        
        nodes = [root]
        result = []
        while len(nodes):
            tmp = []
            children = []
            for e in nodes:
                tmp.append(e.val)
                if e.left is not None:
                    children.append(e.left)
                if e.right is not None:
                    children.append(e.right)
            result.append(tmp)
            nodes = children
        return result
