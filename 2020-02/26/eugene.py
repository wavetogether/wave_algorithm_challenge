# Runtime: 60 ms, faster than 66.95% of Python online submissions for Add Two Numbers.
# Memory Usage: 11.9 MB, less than 47.79% of Python online submissions for Add Two Numbers.

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        def calc(tot):
            return ListNode(tot - (10 * int(tot > 9))), int(tot > 9)

        carry = 0
        cur = head = ListNode(0)
        while l1 and l2:
            cur.next, carry = calc(l1.val + l2.val + carry)
            l1, l2, cur = l1.next, l2.next, cur.next
        l3 = l1 if l1 else l2
        while l3:
            cur.next, carry = calc(l3.val + carry)
            l3, cur = l3.next, cur.next
        if carry == 1:
            cur.next = ListNode(1)
        return head.next

    def addTwoNumbers2(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        def calc(tot):
            return ListNode(tot - (10 * int(tot > 9))), int(tot > 9)

        carry = 0
        cur = head = ListNode(0)
        while l1 or l2 or carry == 1:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            cur.next, carry = calc(val1 + val2 + carry)
            l1 = l1.next if l1 else l1
            l2 = l2.next if l2 else l2
            cur = cur.next
        return head.next
