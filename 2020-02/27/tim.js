// Runtime: 488 ms, faster than 23.12% of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 38.2 MB, less than 24.32% of JavaScript online submissions for Merge k Sorted Lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  }
  
  while (lists.length >= 2) {
    let l1 = lists.pop();
    let l2 = lists.pop();
    
    lists.push(merge(l1, l2));
  }
  
  return lists[0];
};

const merge = (l1, l2) => {    
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    
    if (l1.val <= l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};
