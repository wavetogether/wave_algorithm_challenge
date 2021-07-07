class Solution:
    def merge(self, l1, l2):
        p1, p2 = l1, l2
        prev_p1 = l1
        while p1 is not None and p2 is not None:
            if p1.val > p2.val:
                next_p2 = p2.next
                prev_p1.next = p2
                p2.next = p1
                prev_p1 = p2
                p2 = next_p2
            else:
                prev_p1 = p1
                p1 = p1.next
        if p2 is not None:
            prev_p1.next = p2
               
        return l1
        
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        
        if l1.val < l2.val:
            return self.merge(l1, l2)
        else:
            return self.merge(l2, l1)
