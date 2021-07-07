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
  // Get length
  let length = 0;
  let lengthCursor = head;
  while(1) {
    length++;
    if (!lengthCursor.next) break;
    lengthCursor = lengthCursor.next;
  }

  // if length is 1, remove all
  if (length === 1) {
    return null;
  }

  // if length is n, return next node of head
  if (length === n) {
    return head.next;
  }

  // Change (n+1)th node's next
  let removingCursor = head;
  for (i=0; i<length-n-1; i++) {
    removingCursor = removingCursor.next;
  }
  if (n === 1) {
    removingCursor.next = null;
  } else {
    removingCursor.next = removingCursor.next.next;
  }

  return head;
};