/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;
    
    // get length
    let listLength = 1;
    let counter = head;
    while (counter.next) {
        counter = counter.next;
        listLength++;
    }
    // 다 연결하고
    counter.next = head;
    
    // k = k % length;
    const diff = k % listLength;
    
    // 꼬리 화살표만 바꾸기
    let rotator: ListNode | null = head;
    let result: ListNode | null = null;
    
    for (let i=0; i<listLength - 1 - diff; i++) {
        rotator = rotator!.next;
    }
    result = rotator!.next;
    rotator!.next = null;
    
    return result;
};
