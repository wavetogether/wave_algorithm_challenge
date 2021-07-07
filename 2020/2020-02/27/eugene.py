# Runtime: 84 ms, faster than 95.14% of Python online submissions for Merge k Sorted Lists.
# Memory Usage: 18.1 MB, less than 28.79% of Python online submissions for Merge k Sorted Lists.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        heap = []
        head = cur = ListNode(0)

        for i, list_node in enumerate(lists):
            if list_node:
                heapq.heappush(heap, (list_node.val, list_node))
        while len(heap) > 0:
            _, list_node = heapq.heappop(heap)
            cur.next = list_node
            cur = cur.next
            if list_node.next:
                heapq.heappush(heap, (list_node.next.val, list_node.next))
        return head.next
