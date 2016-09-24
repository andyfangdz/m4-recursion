"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        this.val = val
        this.left, this.right = None, None
"""
class Solution:
    """
    @param root: The root of binary tree.
    @return: An integer
    """ 
    def find(self, node):
        if node is None:
            return 0
        left, right = 0, 0
        if node.left != None:
            left = self.find(node.left)
        if node.right != None:
            right = self.find(node.right)

        return max(left,right) + 1

    def maxDepth(self, root):
        # write your code here
        return self.find(root)
        
