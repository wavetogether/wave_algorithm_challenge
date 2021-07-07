class Solution:
    def cal_depth(self, curr_node):
        if curr_node is None:
            return 0
        else:
            left = self.cal_depth(curr_node.left)
            right = self.cal_depth(curr_node.right)
            if left == -1 or right == -1:
                return -1
            diff = abs(left-right)
            if diff > 1:
                return -1
            else:
                return max(left, right) + 1
            
        
        
    def isBalanced(self, root: TreeNode) -> bool:
        return self.cal_depth(root) != -1
        
