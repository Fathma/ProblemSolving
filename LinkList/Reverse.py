
# def reverse(current):
#     prev = None
#     while current is not None:
#         next_val = current.next
#         current.next = prev
#         prev = current
#         current = next_val
    
#     return prev

def reverse(current, prev = None):
    next_val = current.next
    current.next = prev
    if next_val is None:
        return current
    else:       
        return reverse(next_val, current)

