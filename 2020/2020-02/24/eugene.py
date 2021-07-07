# Runtime: 68 ms, faster than 78.21% of Python online submissions for Palindrome Linked List.
# Memory Usage: 30.9 MB, less than 48.28% of Python online submissions for Palindrome Linked List.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        slow, fast, tail = head, head, None
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        while slow:
            slow.next, slow, tail = tail, slow.next, slow
        while tail and head:
            if tail.val != head.val:
                return False
            tail, head = tail.next, head.next
        return True
