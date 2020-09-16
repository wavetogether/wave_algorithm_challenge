# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if not head or not head.next:
            return head

        cur = prev = head
        length = 1
        while cur.next:
            cur = cur.next
            length += 1
        
        rotate_index = k % length
        if k == 0 or rotate_index == 0:
            return head

        cur = head
        for _ in range(rotate_index):
            cur = cur.next
        
        while cur.next:
            cur = cur.next
            prev = prev.next

        temp = prev.next
        prev.next = None
        cur.next = head
        return temp
