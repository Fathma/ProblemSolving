def height(root):
    if root != None:
        left = height(root.left)
        right = height(root.right)

        if left != None and right != None:
            return max(left, right)+1
        elif left == None and right != None:
            return right+1
        elif right == None and left != None:
            return left+1
        else:
            return 0
