# Runtime: 24 ms, faster than 68.26% of Python online submissions for Reverse Linked List.
# Memory Usage: 13.7 MB, less than 44.44% of Python online submissions for Reverse Linked List.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        tail = None
        while head:
            head.next, head, tail = tail, head.next, head
        return tail
