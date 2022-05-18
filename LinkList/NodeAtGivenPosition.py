class Node(object):
    def __init__(self, data=None, next=None):
       self.data = data
       self.next = next
       
def insertNodeAtPosition(llist, data, position):
    temp = llist
    while position > 1:
        temp = temp.next
        position -=1
    temp.next = Node(data, temp.next)
    
    return llist