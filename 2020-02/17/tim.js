// Runtime: 64 ms, faster than 73.63% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.6 MB, less than 53.85% of JavaScript online submissions for Merge Two Sorted Lists.

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
var mergeTwoLists = function(l1, l2) {
    const res = merge(l1, l2);
    return res;
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
}



