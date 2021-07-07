# Runtime: 120 ms, faster than 51.86% of Python3 online submissions for Merge k Sorted Lists.
# Memory Usage: 16.2 MB, less than 90.91% of Python3 online submissions for Merge k Sorted Lists.

class Solution:
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        if l1.val >= l2.val:
            l1, l2 = l2, l1
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
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        while len(lists) > 1:
            l1 = lists.pop(0)
            l2 = lists.pop(0)
            new_list = self.mergeTwoLists(l1, l2)
            if new_list is not None:
                lists.append(new_list)
                
        if len(lists) == 0:
            return None
        return lists[0]
