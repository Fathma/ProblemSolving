
def reverse(current):
    prev = None
    while current is not None:
        next_val = current.next
        current.next = prev
        prev = current
        current = next_val
    
    return prev
