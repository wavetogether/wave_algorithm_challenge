#Runtime: 64 ms, faster than 47.61% of Python online submissions for Add Two Numbers.
#Memory Usage: 11.9 MB, less than 21.32% of Python online submissions for Add Two Numbers.

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummy_head = ListNode(0)
        curr = dummy_head
        carry = 0
        while l1 or l2 or carry:
            l1_val = l1.val if l1 else 0
            l2_val = l2.val if l2 else 0
            x = (l1_val + l2_val + carry) % 10
            carry = (l1_val + l2_val + carry) // 10
            curr.next = ListNode(x)
            curr = curr.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy_head.next
