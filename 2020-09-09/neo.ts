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
	if (head == null) return head;

	let len = size(head);
	let s = len + len - (k % len);
	let node = head;
	let prev: ListNode | null = null;

	while (s-- > 0) {
		if (node.next == null) node.next = head;
		prev = node;
		node = node.next;
	}
	prev!.next = null;
	return node;
}

function size(head: ListNode): number {
	let s = 0;
	let node: ListNode | null = head;
	while (node != null) {
		s++;
		node = node.next;
	}
	return s;
}
