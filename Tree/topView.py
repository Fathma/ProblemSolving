def topView(root):
    print(root, end=" "),
    if root.right != None:
        topView(root.right)
