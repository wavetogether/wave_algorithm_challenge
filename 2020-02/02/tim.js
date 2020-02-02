// Runtime: 56 ms, faster than 85.61% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Remove Nth Node From End of List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let nodes = [];
  
  let ptr = head;
  
  while(true) {
    if (ptr === null) {
      break;
    }
    nodes.push(ptr);
    ptr = ptr.next;
  }

  if (n === 1 && !head.next) {
    return head.next;
  } else if (nodes.length === n) {
    return head.next;
  }
  
  nodes[nodes.length - n - 1].next = nodes[nodes.length - n].next;
  return head;
};
