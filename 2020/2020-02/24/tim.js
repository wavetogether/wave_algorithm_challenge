// Runtime: 56 ms, faster than 96.22% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 40 MB, less than 46.67% of JavaScript online submissions for Palindrome Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let vals = [];
  
  while (head != null) {
    vals.push(head.val);
    head = head.next;
  }
  
  let length = vals.length;
  
  for (let i = 0; i < length/2; i++) {
    if (vals[i] != vals[length-1-i]) {
      return false;
    }
  }
  
  return true;
};
