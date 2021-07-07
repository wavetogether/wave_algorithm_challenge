import math
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        linked_list = []
        while head:
            linked_list.append(head.val)
            head = head.next
        n = len(linked_list)
        i = int(math.ceil(n/2.0))
        if n == 0: 
            return True
        return linked_list[:i] == list(reversed(linked_list[-i:]))
