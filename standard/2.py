"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        this.val = val
        this.left, this.right = None, None
"""
class Solution:
    # @param T1, T2: The roots of binary tree.
    # @return: True if T2 is a subtree of T1, or false.
    def get(self, root):
        rt = []
        if root is None:
            rt.append("#")
            return

        rt.append(str(root.val))
        self.get(root.left, rt)
        self.get(root.right, rt)
        return rt

    def isSubtree(self, T1, T2):
        # write your code here
        
        
        tree1 = ','.join(self.get(T1))

        tree2 = ','.join(self.get(T2))

        return tree.find(tree2) != -1