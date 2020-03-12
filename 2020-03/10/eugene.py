# Runtime: 28 ms, faster than 80.69% of Python online submissions for Remove Duplicates from Sorted List.
# Memory Usage: 11.9 MB, less than 42.86% of Python online submissions for Remove Duplicates from Sorted List.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        cur = head
        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head
