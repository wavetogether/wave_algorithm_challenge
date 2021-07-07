// 1560 / 1563 test cases passed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let num1 = '';
  let num2 = '';
  
  while (l1 != null) {
    num1 += l1.val;
    l1 = l1.next;
  }
  
  while (l2 != null) {
    num2 += l2.val;
    l2 = l2.next;
  }
  
  num1 = Number(num1.split('').reverse().join(''));
  num2 = Number(num2.split('').reverse().join(''));
  
  let sum = num1 + num2;
  
  let head = null;
  let node = head;
  
  if (sum === 0) {
    return new ListNode(sum);
  }
  
  while (sum > 0) {
    let temp = sum % 10;
    let nextNode = new ListNode(temp);
    
    if (head == null) {
      head = nextNode;
    } else {
      node.next = nextNode;  
    }
    
    node = nextNode;
    
    sum = Math.floor(sum / 10);
  }
  
  return head;
};
